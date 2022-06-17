<?php

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

require __DIR__. '/../bootstrap/app.php';

$app->get('/',function (Request $request, Response $response){
    $response->getBody()->write('Slim Shaddy');
    return $response;
    
});

$app->run();