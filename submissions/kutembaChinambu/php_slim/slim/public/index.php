<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/../bootstrap/app.php';
//require __DIR__ . '/../app/controllers/UserContoller.php';

$app->get('/', function (Request $request, Response $response){
    $response->getBody()->write('Finally working');
    return $response;

});

//run app
$app->run();
