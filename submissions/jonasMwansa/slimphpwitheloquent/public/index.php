<?php
require_once "../bootstrap/app.php";

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app->get('/', function(Request $request, Response $response){
    $response->getBody()->write("slim app");
    return $response;
}
);

$app->run();

