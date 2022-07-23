<?php

use App\ArticleController\articlesController;
use App\Middleware\jsonBodyParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group("/api", function(RouteCollectorProxy $group)
{

    //fetch all articles
    $group->get('/articles', articlesController::class.':index');
    
    //fetch one article by id
    $group->get('/articles/{id}', articlesController::class.':getOneArticle');

    //create new article
    $group->post('/articles', articlesController::class.':createArticle');

    //get published articles
    $group->get('/published', articlesController::class.':getPublishedArticles');

    //get published articles
    $group->put('/publish/{id}', articlesController::class.':publishArticle');

    //update article details
    $group->put('/articles/{id}', articlesController::class.':updateArticle');
    //->add(new jsonBodyParserMiddleware());

    //delete article 
    $group->delete('/articles/{id}', articlesController::class.':deleteArticle');

});

?>