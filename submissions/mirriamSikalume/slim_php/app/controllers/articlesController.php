<?php

namespace App\ArticlesController;

use DB\Database;
use PDOException;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/../../connection/connection.php';

class articlesController 
{
    private $db;

    public function __construct()
    {
        $this->db =(new Database())->connection();
    }

    //constructor ends here
    //fetch alL articles 
    public function index(Request $request, Response $response)
    {
        try {
                $query=$this->db->prepare("SELECT * FROM articles_table");
                $query->execute();

                $articles=$query->fetchAll();
                if($articles){

                    $message=[
                        "status"=>"success",
                        "data"=> $articles
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(200);
                }
                
                $response->getBody()->write(json_encode("There are no articles at the moment"));
                return $response->withHeader("Content-Type","application/json")->withStatus(500);                    
            
        } catch (PDOException  $exception) {
            $response->getBody()->write(json_encode("exception: ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }
    }

    //fetch one article function
    public function getOneArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        try {
                $query=$this->db->prepare("SELECT * FROM articles_table WHERE id = :id");
                $query->bindParam(":id", $id);
                $query->execute();

                $article=$query->fetch();

                if(!$article){

                    $message=[
                        "status"=>"failed",
                        "data"=> "there is no such an article"
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(404);
                }

                    $message=[
                        "status"=>"success",
                        "data"=> $article
                    ];

                    $response->getBody()->write(json_encode($message));
                return $response->withHeader("Content-Type","application/json")->withStatus(200);
            
        } catch (PDOException  $exception) {
            $response->getBody()->write(json_encode("error ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }
    }

    //method to perfom the posting request to database

    public function createArticle(Request $request, Response $response)
    {
        $dataRequest = $request->getParsedBody();

        //specify fields
        $title = $dataRequest['title'];
        $description = $dataRequest['description'];
        $status = "unpublished";
        $created_at = date("Y-m-d H:i:s");

        $insertQuery=("INSERT INTO articles_table (title, description, status, created_at) VALUES (:title, :description, :status, :created_at)");
        
        try {
                $query=$this->db->prepare($insertQuery);

                //perform the bindings
                $query->bindParam(":title", $title);
                $query->bindParam(":description", $description);
                $query->bindParam(":status", $status);
                $query->bindParam(":created_at", $created_at);
                $query->execute();

                if($query){
                
                    $message=[
                        "status"=>"success",
                        "data"=> [
                                "title"=>$title,
                                "description"=>$description,
                                "status"=> $status,
                                "created by"=> "",
                                "created at"=>$created_at
                        ]
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(200);
            }

            $message=[
                "status"=>"failed",
                "data"=> "Article cannot be created"
            ];

            $response->getBody()->write(json_encode($message));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);

        } catch (PDOException  $exception) {

            $response->getBody()->write(json_encode("error ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }
    }


    //function to update article details
    public function updateArticleData(Request $request, Response $response, $args){

        $dataRequest = $request->getParsedBody();
        $id=$args['id'];

        $description = $dataRequest['description'];
        $title = $dataRequest['title'];
        
        $query=("UPDATE articles_table SET description= :description, title= :title WHERE id= $id");

        try {

                $updateQuery = $this->db->prepare($query);

                //perform the bindings
                $updateQuery->bindParam(":description", $description);
                $updateQuery->bindParam(":title", $title);
                $updateQuery->execute();

                if($updateQuery){
                
                    $message=[
                        "status"=>"success",
                        "data"=> "article successfully updated"
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(200);
            }

            $message=[
                "status"=>"failed",
                "data"=> "Article cannot be updated"
            ];

            $response->getBody()->write(json_encode($message));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
            
        } catch (PDOException  $exception) {
            $response->getBody()->write(json_encode("error ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }
    }

    //function to publish an article
    public function publishArticle(Request $request, Response $response, $args){
        
        $id = $args['id'];
        $status = 'published';
        
        try {

            $query=$this->db->prepare("UPDATE articles_table SET status =:status WHERE id= $id");

            //perform the bindings
            $query->bindParam(":status", $status);
            $query->execute();

                if(!$query){

                    $message=[
                        "status"=>"failed",
                        "data"=> "article can't be published"
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(500);

                }

                $message=[
                    "status"=>"success",
                    "data"=> "article successfully published"
                ];

                $response->getBody()->write(json_encode($message));
                return $response->withHeader("Content-Type","application/json")->withStatus(200);
        
    } catch (PDOException  $exception) {
        $response->getBody()->write(json_encode("error ". $exception->getMessage()));
        return $response->withHeader("Content-Type","application/json")->withStatus(500);
    }



    }

    //function to get all published articles
    public function getPublishedArticles(Request $request, Response $response, $args){

            try {
                $query=$this->db->prepare("SELECT * FROM articles_table WHERE status = 'published'");
                $query->execute();

                $articles=$query->fetchAll();

                if($articles){

                    $message=[
                        "status"=>"success",
                        "data"=> $articles
                    ];

                    $response->getBody()->write(json_encode($message));
                    return $response->withHeader("Content-Type","application/json")->withStatus(200);

                }

                $message=[
                    "status"=>"failed",
                    "data"=> "there are no published articles at the moment"
                ];

                $response->getBody()->write(json_encode($message));
                return $response->withHeader("Content-Type","application/json")->withStatus(200);
            
        } catch (PDOException  $exception) {
            $response->getBody()->write(json_encode("error ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }

    }

    //fucntion to delete a user for a specified id
    public function deleteArticle(Request $request, Response $response, $args){
        $id = $args['id'];
        try{
            $query=$this->db->prepare("DELETE FROM articles_table WHERE id=$id");
            $query->execute();

            if(!$query){
                
                $message=[
                    "status"=>"failed",
                    "data"=> "article cannot be deleted or either does'nt exist"
                ];

                $response->getBody()->write(json_encode($message));
                return $response->withHeader("Content-Type","application/json")->withStatus(500);
            }

            $message=[
                "status"=>"success",
                "data"=> "article sucessfully deleted"
            ];

            $response->getBody()->write(json_encode($message));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);

        }
        catch(PDOException $exception){
            $response->getBody()->write(json_encode("error ". $exception->getMessage()));
            return $response->withHeader("Content-Type","application/json")->withStatus(500);
        }
    }
    
}

?>