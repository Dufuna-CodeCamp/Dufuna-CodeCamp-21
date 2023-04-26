<?php
namespace App\Controller;

use PDO;
use PDOException;
use DB\DB;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
class ArticlesController{
    private $db;
    public function __construct(){
      $this->db=(new DB())->connect();
    }


    // new article post create
    public function create(Request $request, Response $response){
        $requestData= $request->getParsedBody();
        $title=$requestData['title'];
        $description=$requestData['description'];
        $created_by=$requestData['created_by'];
        $created_at=Date('Y-m-d H:i:s');
        $sql= "INSERT INTO articles (title, description,created_by,created_at) 
        VALUES (:title, :description,:created_by,:created_at)";
        try{
            $query= $this->db->prepare($sql);
            $query->bindParam(':title',$title);
            $query->bindParam(':description',$description);
            $query->bindParam(':created_by',$created_by);
            $query->bindParam(':created_at',$created_at);
            $query->execute();
            $response->getBody()->write(json_encode(["status"=>"success","message"=>"This article was successfully created",
            "data"=>[
                "title"=> $title,
                "description"=>$description,
                "created_by"=>$created_by,
                "created_at"=>$created_at,
            ]]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error cannot create'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
        
    }
    
    //2 update existing aarticle
    public function update(Request $request, Response $response ,$args){
        $requestData= $request->getParsedBody();
        $id= $args['id'];         
        
        $title=$requestData['title'];
        $description=$requestData['description'];
        $created_by=$requestData['created_by'];
        $created_at=Date('Y-m-d H:l:s');

        try{
            $query= $this->db->prepare("UPDATE articles SET title= :title, description= :description WHERE id = $id");
            $query->bindParam(':title',$title);
            $query->bindParam(':description',$description);
            $query->execute();
            $response->getBody()->write(json_encode(["status"=>"success","message"=>"This article was successfully updated"]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error cannot update'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    // 3 delete
    public function delete(Request $request, Response $response ,$args){
        $id=$args['id'];
        try{
            $query= $this->db->prepare("use slim_app_task;DELETE FROM articles WHERE id =$id");
            $query->execute();
            $articles= $query;
            if(!$articles){
                $response->getBody()->write(json_encode(['error'=>'Article not found!']));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(306);;
            }
            $response->getBody()->write(json_encode(["status"=>"success","message"=>"This article was successfully deleted"]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    //4 publish unpublished
    public function publish(Request $request, Response $response ,$args){
        $requestData= $request->getParsedBody();
        $id=$args['id'];
        $status= $requestData['status'];
        try{
            $query= $this->db->prepare("UPDATE articles SET status= :status WHERE id =:id");
            $query->bindParam(':id', $id);
            $query->bindParam(':status', $status);
            $query->execute();
            $response->getBody()->write(json_encode(["status"=>"success","message"=>"This article was successfully published"]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    //5 get all published
    public function view_published(Request $request, Response $response){
       try{
            $query= $this->db->prepare("SELECT * FROM articles where status='published'"); 
            $query->execute();
            $articles= $query->fetchAll();
            
            $response->getBody()->write(json_encode(["status"=>"success","data"=>$articles]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error cannot get published'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    // get one article
    public function getArticle(Request $request, Response $response , $args){
        $id= $args['id'];

        try{
            $query= $this->db->prepare("SELECT * FROM articles WHERE id = :id");
            $query->bindParam(':id', $id);
            $query->execute();
            $article= $query->fetch();
            if(!$article){
                $response->getBody()->write(json_encode(['error'=>'article not found']));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
            }
            $response->getBody()->write(json_encode(["status"=>"success","data"=>$article]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        }catch (PDOException $ex){
            $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    
    
}