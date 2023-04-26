<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use App\Model\Article;
use App\Constants\Constants;

class ArticleController 
{
    public function index (ServerRequestInterface $request, ResponseInterface $response, $args)
    {
        

        if (count($args) > 0){
            $option = $args['option'];
            if ($option === 'published'){
                $articles = Article::where('status', '=', 'published')->get();
            }else if($option === 'unpublished'){
                $articles = Article::where('status', '=', 'unpublished')->get();
                // var_dump($articles);
            }else{
                $response->getBody()->write(json_encode(["error"=> "invalid url"]));
                return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(404);
            }   
        } else{
            $articles = Article::all();
        }
        $response->getBody()->write($articles->toJson());
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200);

    }

    public function create (ServerRequestInterface $request, ResponseInterface $response)
    {
        $data = $request->getParsedBody();
        $article = Article::create([
            'title'=> $data['title'],
            'description'=> $data['desc'],
            'created_by'=> $data['created_by'],
            'created_at'=> date('Y-m-d H:i:s')
        ]);

        $article->save();
        $response->getBody()->write(json_encode([
            "status"=>"success",
            "data" => $article
        ]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200);
    }

    public function getArticle (ServerRequestInterface $request, ResponseInterface $response, $args)
    {
        $id = $args['id'];

        $article = Article::find($id);

        if (!$article){
            $response->getBody()->write(json_encode(["error"=> "no article found"]));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(404);
        }
        $response->getBody()->write($article->toJson());
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200); 
    }

    public function update (ServerRequestInterface $request, ResponseInterface $response, $args)
    {
        $id = $args['id'];

        $data = $request->getParsedBody();

        $article = Article::find($id);
        $article->title = $data['title'];
        $article->description = $data['desc'];
        $article->save();

        $response->getBody()->write(json_encode(["status"=>"success", "message"=>"This article was successfully updated"]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200); 

    }

    public function publishArticle (ServerRequestInterface $request, ResponseInterface $response, $args)
    {
        $id = $args['id'];

        $article = Article::find($id);
        $article->status = "published";

        $article->save();
        $response->getBody()->write(json_encode(["status"=>"success", "message"=>"This article was successfully published"]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200); 
    }

    public function delete (ServerRequestInterface $request, ResponseInterface $response, $args)
    {
        $id = $args['id'];

        $article = Article::find($id);

        $article->delete();
        $response->getBody()->write(json_encode(["status"=>"success", "message"=>"This article was successfully deleted"]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APP_JSON)->withStatus(200); 
    }
}