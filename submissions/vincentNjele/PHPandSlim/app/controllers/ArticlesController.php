<?php

namespace App\Controllers;

use App\Models\articles;
use PDOException;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/../models/Article.php';
require __DIR__ . '/../../config/db.php';
class ArticlesController
{

    public function index(Request $request, Response $response)
    {


        $articles =  new articles();

        try {

            $response->getBody()->write($articles->all()->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function create(Request $request, Response $response, $args)
    {


        $articles =  new articles();

        $data = $request->getParsedBody();
        $title = $data["title"];
        $description = $data["description"];
        $status = $data["status"];
        $created_by = $data["created_by"];


       
        $createdAt = date('Y-m-d H:i:s.u');

        $singleArticle = $articles->create([
            'title' =>   $title,
            'description' => $description,
            'status' => $status,
            'created_by' => $created_by,
            'created_at' => $createdAt

        ]);


        try {

            $singleArticle->save();
            $response->getBody()->write($singleArticle->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function getById(Request $request, Response $response, $args)
    {

        $id = $args['id'];
          

        $articles =  new articles();

        try {


            $response->getBody()->write($articles->find($id)->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function delete(Request $request, Response $response, $args)
    {

        $id = $args['id'];

        $articles =  new articles();
        $resultedArticle = $articles->find($id);

        try {

            if (!$resultedArticle) {

                $response->getBody()->write(json_encode(["Erro" => "Article Not Found"]));
                return $response->withHeader('content-Type', 'application/json')->withStatus(404);
            }

            $resultedArticle->delete();
            $response->getBody()->write(json_encode(["success" => "Article Deteletd Successfully"]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function update(Request $request, Response $response, $args)
    {


        $articles =  new articles();

        $data = $request->getParsedBody();
        $id = $args['id'];

        $description = $data["description"];
        $status = $data["status"];
   


        try {

            $newArticles = $articles->find($id);
            $newArticles->description = $description;
            $newArticles->status = $status;
              
            $newArticles->save();

            $response->getBody()->write($newArticles->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function publish(Request $request, Response $response, $args)
    {


        $articles =  new articles();

        $data = $request->getParsedBody();
        $id = $args['id'];
        $status = "published";
   


        try {

            $newArticles = $articles->find($id);
            $newArticles->status = $status;
              
            $newArticles->save();
            
            $response->getBody()->write($newArticles->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }

    public function getPublished(Request $request, Response $response, $args)
    {


        $articles =  new articles();
  
        $status = 'published';


        try {

            $newArticles = $articles->all()->where('status','published');
                                    

            $response->getBody()->write($newArticles->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch (PDOException $e) {

            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
        }
    }


}
