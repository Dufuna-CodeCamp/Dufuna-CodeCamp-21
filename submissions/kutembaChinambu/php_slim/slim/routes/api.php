<?php

use App\Controller\TestUserController;
use App\Middleware\JsonBodyParserMiddeware as MiddlewareJsonBodyParserMiddeware;
use middleware\JsonBodyParserMiddeware;
use Slim\Routing\RouteCollectorProxy;

 $app->group('/api', function(RouteCollectorProxy $group) {
     
    $group->get('/articles', TestUserController::class . ':index');
    
    $group->get('/published', TestUserController::class . ':published');
    

    $group->get('/articles/{id}', TestUserController::class . ':findById');

    $group->post('/articles', TestUserController::class . ':create');
    //->add(new JsonBodyParserMiddeware());

    $group->put('/articles-publish/{id}', TestUserController::class . ':publish');
    //->add(new JsonBodyParserMiddeware());

    $group->put('/articles/{id}', TestUserController::class . ':update');

    $group->delete('/articles/{id}', TestUserController::class . ':delete');

 });



