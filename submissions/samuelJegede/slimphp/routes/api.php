<?php

use App\Controller\articlesController;
use Slim\Routing\RouteCollectorProxy;
use App\Middleware\JsonParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group){

    $group->get('/articles', articlesController::class . ':index');

    $group->get('/articles/{id}', articlesController::class . ':getOneArticle');

    $group->post('/articles', articlesController::class . ':create')
        ->add(new JsonParserMiddleware());

    $group->put('/publish/{id}', articlesController::class.':publishArticle')
        ->add(new JsonParserMiddleware());

    $group->get('/published', articlesController::class.':getPublishedArticles');

    $group->put('/articles/{id}', articlesController::class . ':updateArticle')
        ->add(new JsonParserMiddleware());  

    $group->delete('/articles/{id}', articlesController::class . ':deleteArticle');

});