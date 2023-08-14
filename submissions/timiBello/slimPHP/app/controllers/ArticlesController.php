<?php

    namespace App\Controller;
    
    use DB\DB;
    // use PDOException;
    use App\Model\Articles;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    class ArticlesController{

        private $db;

        public function __construct(){
            $this->db = (new DB())->connect();
        }

        

        // ENDPOINT 1: TO CREATE A NEW ARTICLE 
        public function create(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();

            $title = $requestData['title'];
            $description = $requestData['description'];
            $status = 'unpublished';
            $created_by = $requestData['created_by'];
            $created_at = date('Y-m-d H:l:s');

            $sql = "INSERT INTO articles (title, description, status, created_by, created_at) VALUES (:title, :description, :status, :created_by, :created_at)";


            try{
                $query = $this->db->prepare($sql);
                $query->bindParam(':title', $title);
                $query->bindParam(':description', $description);
                $query->bindParam(':status', $status);
                $query->bindParam(':created_by', $created_by);
                $query->bindParam(':created_at', $created_at);
                $query->execute();
                $response->getBody()->write(json_encode(["status" => "success", "message" => "This article was successfully created" ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }
 
        // ENDPOINT 2: TO UPDATE AN EXISTING ARTICLE
        public function update(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();

            $id = $args['id'];

            $title = $requestData['title'];
            $description = $requestData['description'];
            // $created_by = $requestData['created_by'];
            // $created_at = Date('Y-m-d H:l:s');

            try{
                $query = $this->db->prepare("UPDATE articles SET title = :title, description = :description WHERE id = :id");
                $query->bindParam(':id', $id);
                $query->bindParam(':title', $title);
                $query->bindParam(':description', $description);
                // $query->bindParam(':created_by', $created_by);
                // $query->bindParam(':created_at', $created_at);
                $query->execute();
                $response->getBody()->write(json_encode(["status" => "success", "message" => "This article was successfully updated" ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }

        // ENDPOINT 3 - TO DELETE AN EXISTING ARTICLE
        public function delete(Request $request, Response $response, $args){

            $id = $args['id'];

            try{
                $query = $this->db->prepare("DELETE FROM articles WHERE id = $id");
                $query->execute();
                $articles = $query;
                if(!$articles){
                    $response->getBody()->write(json_encode(['error'=>'Sorry, article not found!']));
                    return $response->withHeader('Content-Type', 'application/json')->withStatus(404); 
                }
                $response->getBody()->write(json_encode(['status' => 'success',
                'message' => 'Article was successfully deleted']));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }

        // ENDPOINT 4: TO PUBLISH AN UNPUBLISHED ARTICLE 
        public function publish(Request $request, Response $response, $args){

            $requestData = $request->getParsedBody();
            
            $id = $args['id'];

            $status = $requestData['status'];


            try{
                $query = $this->db->prepare("UPDATE articles SET status = :status WHERE id=:id");
                $query->bindParam(':id', $id);
                $query->bindParam(':status', $status);
                $query->execute();
                $response->getBody()->write(json_encode(["status" => "success", "message" => "This article was successfully published" ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }

        // ENDPOINT 5: TO SHOW ALL PUBLISHED ARTICLES 
        public function view_published(Request $request, Response $response){
            try{
                $query = $this->db->prepare("SELECT * FROM articles");
                $query ->execute();
                $articles = $query->fetchAll();
                $response->getBody()->write(json_encode(["status" => "success", "data" => $articles ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }

        // ENDPOINT 6: TO RETRIEVE JUST A SINGLE ARTICLE 
        public function getArticle(Request $request, Response $response, $args){

            $id = $args['id']; 

            try{
                $query = $this->db->prepare("SELECT * FROM articles WHERE id = :id");
                $query->bindParam(':id', $id);
                $query->execute();
                $articles = $query->fetch();
                if(!$articles){
                    $response->getBody()->write(json_encode(['error'=>'Sorry, article not found!']));
                    return $response->withHeader('Content-Type', 'application/json')->withStatus(404); 
                }
                $response->getBody()->write(json_encode(["status" => "success", "data" => [$articles] ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200); 
            } catch (PDOException $ex) {
                $response->getBody()->write(json_encode(['error'=>$ex->getMessage()]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(500); 
            }
        }
    }

