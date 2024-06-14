<?php

    namespace App\Controller;
    
    use DB\DB;
    // use PDOException;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    class ArticlesController{

        private $db;

        public function __construct(){

            $this->db = (new DB())->connect();
        }

        public function published(Request $request, Response $response){

            try{
                $query = $this->db->prepare("SELECT * FROM articles WHERE status = 1");
                $query ->execute();
                $articles = $query->fetchAll();
                $response->getBody()->write(json_encode($articles));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }

        public function article(Request $request, Response $response, $args){

            $id = $args['id'];

            try{
                $query = $this->db->prepare("SELECT * FROM articles WHERE id = :id");
                $query->bindParam(':id',$id);
                $query->execute();
                $articles = $query->fetch();
                if(!$articles){
                    $response->getBody()->write(json_encode(['error'=>'Sorry, article not found!']));
                    return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(404); 
                }
                $response->getBody()->write(json_encode($articles));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }

        public function Add_article(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();

            $title = $requestData['title'];
            $discription = $requestData['discription'];
            $status = 0;
            $created_by = $requestData['created_by'];
            $created_at = Date('Y-m-d H:l:s');

            $sql = "INSERT INTO articles (title, discription, status, created_by, created_at) VALUES (:title, :discription, :status, :created_by, :created_at)";


            try{
                $query = $this->db->prepare($sql);
                $query->bindParam(':title',$title);
                $query->bindParam(':discription',$discription);
                $query->bindParam(':status',$status);
                $query->bindParam(':created_by',$created_by);
                $query->bindParam(':created_at',$created_at);
                $query->execute();
                $response->getBody()->write(json_encode(['message'=>'Successfull!']));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }

        public function modify(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();

            $id = $args['id'];

            $title = $requestData['title'];
            $discription = $requestData['discription'];
            $created_by = $requestData['created_by'];
            $created_at = Date('Y-m-d H:l:s');

            try{
                $query = $this->db->prepare("UPDATE articles SET title = :title, discription = :discription, created_by = :created_by, created_at = :created_at WHERE id = :id");
                $query->bindParam(':id',$id);
                $query->bindParam(':title',$title);
                $query->bindParam(':discription',$discription);
                $query->bindParam(':created_by',$created_by);
                $query->bindParam(':created_at',$created_at);
                $query->execute();
                $response->getBody()->write(json_encode(['message'=>'Successfull!']));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }

        public function publish(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();
            
            $id = $args['id'];

            $status = $requestData['status'];


            try{
                $query = $this->db->prepare("UPDATE articles SET status = :status WHERE id=:id");
                $query->bindParam(':id',$id);
                $query->bindParam(':status',$status);
                $query->execute();
                $response->getBody()->write(json_encode(['message'=>'Successfull!']));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }

        public function del(Request $request, Response $response, $args){

            $id = $args['id'];

            try{
                $query = $this->db->prepare("DELETE FROM articles WHERE id = $id");
                $query->execute();
                $articles = $query;
                if(!$articles){
                    $response->getBody()->write(json_encode(['error'=>'Sorry, article not found!']));
                    return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(404); 
                }
                $response->getBody()->write(json_encode(['message'=>'article was successfully deleted']));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('CONTENT-TYPE', 'application/json')->withStatus(500); 
            }
        }
    }