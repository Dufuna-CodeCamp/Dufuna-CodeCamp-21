<?php

namespace App\ArticleController;

use App\Model\Article;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use PDOException;

class articlesController{

        //fetch all articles 
        public function index(Request $request, Response $response)
        {

                $articles= Article::all();
                if($articles){
                        //generate message and the content
                        $messageObject =  [
                                "status" => "success",
                                "data" => $articles
                            ];

                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(200);
                }

                $response->getBody()->write(json_encode(["status"=>"message", "error"=>"there are no articles yet"]));
                return $response->withHeader('Content-Type', 'application/json')
                                ->withStatus(500);

        }


        //get one article function
        public function getOneArticle(Request $request, Response $response, $args){
                $id = $args['id'];
                $article=Article::find($id);

                if($article){

                        //generate message and the content
                        $messageObject =  [
                                "status" => "success",
                                "data" => $article
                            ];

                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(200);
                }

                $response->getBody()->write(json_encode(["status"=>"failed", "message"=>"there is no such an article"]));
                return $response->withHeader('Content-Type', 'application/json')
                                ->withStatus(500);
        }

        //function to create new article
        public function createArticle(Request $request, Response $response){
                
                $formData = $request->getParsedBody();

                $date_created =date('Y-m-d H:i:s');
                $status ='unpublished'; //default status
                $newArticle = new Article();

                
                $newArticle->title = $formData['title'];
                $newArticle-> description = $formData['description'];
                $newArticle -> status = $status;
                $newArticle->created_at = $date_created;
                
                $newArticle->save();
                if($newArticle){
                        //generate message and the content
                        $messageObject =  [
                                "status" => "success",
                                "data" => $newArticle
                            ];

                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(200);
                }

                $response->getBody()->write(json_encode(["status"=>"failed", "message"=>"an article cannot be created"]));
                return $response->withHeader('Content-Type', 'application/json')
                                ->withStatus(500);
        }


        //function to publish an article
        public function publishArticle(Request $request, Response $response, $args)
        {            
        
                $id = $args['id'];
                
                        try {
 
                                $article = Article::find($id);
                                $article->status = "published";
                                $article->save();
                                        
                                if($article){
                                        //generate message and the content
                                        $messageObject =  [
                                                "status" => "success",
                                                "message" => "succesfully published an article"
                                            ];
                
                                        $response->getBody()->write(json_encode($messageObject));
                                        return $response->withHeader('Content-Type', 'application/json')
                                                        ->withStatus(200);
        
                        }
        
                        $messageObject =  [
                                "status" => "failed",
                                "message" => "cannot publish the article"
                                ];
                                
                                $response->getBody()->write(json_encode($messageObject));
                                return $response->withHeader('Content-Type', 'application/json')
                                                ->withStatus(500);
                    } catch (PDOException $exception) {
            
                        $response->getBody()->write(json_encode(["exception" => $exception->getMessage()]));
                        return $response->withHeader('content-Type', 'application/json')->withStatus(500);
                    }
                }


        //getting all published articles
        public function getPublishedArticles(Request $request, Response $response, $args)
        {
    
            try {
    
                $published = Article::all()->where('status','published');
                                        
                if($published){
                        //generate message and the content
                        $messageObject =  [
                                "status" => "success",
                                "data" => $published
                            ];
        
                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(200);

                }

                $messageObject =  [
                        "status" => "failed",
                        "message" => "currently there are no published articles"
                        ];

                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(500);
            } catch (PDOException $exception) {
    
                $response->getBody()->write(json_encode(["exception" => $exception->getMessage()]));
                return $response->withHeader('content-Type', 'application/json')->withStatus(500);
            }
        }
    

        //function to update exisiting article
        public function updateArticle(Request $request, Response $response, $args){
                
                $formData = $request->getParsedBody();

                $id = $args['id'];

                $article=Article::find($id);

                //else if its there, then update the following fields
                try{        
                        $article->title = $formData["title"];
                        $article->description =$formData["description"];
                        $article->save();

                                $response->getBody()->write($article->toJson());
                                return $response->withHeader('Content-Type', 'application/json')
                                                ->withStatus(200);
                        

                } catch(PDOException $exception) {
    
                        $response->getBody()->write(json_encode(["exception" => $exception->getMessage()]));
                        return $response->withHeader('content-Type', 'application/json')->withStatus(500);

        }
}

        //delete a specific article by specifying an id
        public function deleteArticle(Request $request, Response $response, $args){
        
                $id = $args['id'];
                $article= Article::find($id);
                        
                if(!$article){
                        $response->getBody()->write('no such an article');
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(400);
                        }
        
                $article->delete();

                //generate message if it's deleted 
                $messageObject = [
                        "status" => "success",
                        "message" => "article successfully deleted"
                        ];
                        
                if($article){
                        $response->getBody()->write(json_encode($messageObject));
                        return $response->withHeader('Content-Type', 'application/json')
                                        ->withStatus(200);
                } 

                $response->getBody()->write(json_encode(["status"=>"failed", "message"=>"an article cannot be deleted"]));
                return $response->withHeader('Content-Type', 'application/json')
                                ->withStatus(500);
        }

}

?>