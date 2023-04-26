<?php

use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;
use App\Middleware\JsonParserMiddleWare;

$app->group('/api', function (RouteCollectorProxy $group){
    $group->get('/articles/[{option}]', ArticleController::class. ':index');
    $group->post('/article', ArticleController::class. ':create');
    $group->get('/article/{id}', ArticleController::class. ':getArticle');
    $group->put('/article/{id}', ArticleController::class. ':update')
        ->add(new JsonParserMiddleWare());
    $group->put('/article/publish/{id}', ArticleController::class. ':publishArticle')
        ->add(new JsonParserMiddleWare());
    $group->delete('/article/delete/{id}', ArticleController::class. ':delete');
});