<?php
namespace App\Controller;

use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController {
    public function index(Request $request, Response $response) {
        $articles = Article::all();

        $responseObj = [
            "status" => "success",
            "data" => $articles
        ];

        $response->getBody()->write(json_encode($responseObj));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }

    public function getArticle(Request $request, Response $response, $args) {
        $id = $args["id"];
        
        $article = Article::find($id);

        if(!$article) {
            $response->getBody()->write(json_encode([
                "status" => "failed",
                "message" => "Article not found"
            ]));

            return $response->withHeader("Content-Type", "application/json")->withStatus(400);
        }
        
        $responseObj = [
            "status" => "success",
            "data" => $article
        ];

        $response->getBody()->write(json_encode($responseObj));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }

    public function create(Request $request, Response $response) {
        $data = $request->getParsedBody();

        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'created_by' => $data['created_by'],
            'created_at' => date('Y-m-d H:i:s')
        ]);
        $article->save();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "data" => [
                "title" => $article->title,
                "description" => $article->description,
                "created_by" => $article->created_by,
                "created_at" => $article->created_at,
                "id" => $article->id
            ]
        ]));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }

    public function updateArticle(Request $request, Response $response, $args) {
        $id = $args["id"];
        $data = $request->getParsedBody();

        $article = Article::find($id);

        if(!$article) {
            $response->getBody()->write(json_encode([
                "status" => "failed",
                "message" => "Article not found. Can not update"
            ]));

            return $response->withHeader("Content-Type", "application/json")->withStatus(400);
        }

        $article->title = $data['title'];
        $article->description = $data['description'];
        $article->save();

        $responseObj = [
            "status" => "success",
            "data" => $article
        ];

        $response->getBody()->write(json_encode($responseObj));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }

    public function publishArticle(Request $request, Response $response, $args) {
        $id = $args["id"];

        $data = $request->getParsedBody();

        $article = Article::find($id);

        if(!$article) {
            $response->getBody()->write(json_encode([
                "status" => "failed",
                "message" => "Article not found. Can not publish"
            ]));

            return $response->withHeader("Content-Type", "application/json")->withStatus(400);
        }

        $article->status = "published";
        $article->save();

        $responseObj = [
            "status" => "success",
            "data" => $article
        ];

        $response->getBody()->write(json_encode($responseObj));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args) {
        $id = $args["id"];
        
        $article = Article::find($id);

        if(!$article) {
            $response->getBody()->write(json_encode([
                "status" => "failed",
                "message" => "Article not found"
            ]));

            return $response->withHeader("Content-Type", "application/json")->withStatus(400);
        }

        $article->delete();

        $response->getBody()->write(json_encode([
            "status" => "success",
            "message" => "This article was successfully deleted"
        ]));

        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }
}