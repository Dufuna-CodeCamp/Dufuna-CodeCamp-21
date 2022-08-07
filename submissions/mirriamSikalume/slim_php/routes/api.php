<?php

use App\ArticlesController\articlesController;
use Slim\Routing\RouteCollectorProxy;
use App\Middleware\jsonParserMiddleWare;

$app->group("/api", function(RouteCollectorProxy $group)
{
    
    //route to get all users
    $group->get('/articles', articlesController::class.':index');

    //get published articles
    $group->get('/published', articlesController::class.':getPublishedArticles');

    //get a single user
    $group->get('/articles/{id}', articlesController::class.':getOneArticle');

    //to insert users
    $group->post('/articles', articlesController::class.':createArticle')
    ->add(new jsonParserMiddleWare());

    //to update article details
    $group->put('/articles/{id}', articlesController::class.':updateArticleData')
    ->add(new jsonParserMiddleWare());

    //publish article
    $group->put('/publish/{id}', ArticlesController::class.':publishArticle')
    ->add(new jsonParserMiddleWare());

    //delete an article
    $group->delete('/articles/{id}', articlesController::class. ':deleteArticle');

});

?>