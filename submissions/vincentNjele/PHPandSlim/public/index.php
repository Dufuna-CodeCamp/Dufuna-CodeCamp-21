<?php

require __DIR__ . '/../app/app.php';
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;



$app->get("/", function(Request $request, Response $response) {

    $response->getBody()->write("Hello World");

    return $response;

});

$app->run();

