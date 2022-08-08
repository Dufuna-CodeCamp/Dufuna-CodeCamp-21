<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ .'/../bootstrap/app.php';


//Route
$app->get('/', function (Request $request, Response $response){
    $response->getBody()->write('Slim article publishing app');
    return $response;
});


//Run the app
$app->run();