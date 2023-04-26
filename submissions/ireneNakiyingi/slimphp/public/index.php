<?php
require __DIR__ . '/../bootstrap/app.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;



$app->get('/', function (Request $request, Response $response){
    $response->getBody()->write("Slim App works so far");
    return $response;
});
echo "index works";

$app->run();