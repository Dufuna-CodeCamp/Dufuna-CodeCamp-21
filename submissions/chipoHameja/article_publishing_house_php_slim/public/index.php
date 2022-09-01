<?php
require __DIR__ . '/../bootstrap/app.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/', function(Request $request, Response $response){
    $response->getBody()->write('Slim is still working');
    return $response;
});

$app->redirect('/customers', '/clients', 301);

$app->get('/clients/[{id}]', function(Request $request, Response $response, $args){
    $payload = json_encode($args);
    $response->getBody()->write("You are on the customers page id: $payload");
    return $response->withHeader("Content-Type", "application/json");//->withStatus(200);
});

$cars = [
    1 => ["id" => 1, "name" => "Volvo"],
    2 => ["id" => 2, "name" => "BMW"],
    3 => ["id" => 3, "name" => "Saab"],
    4 => ["id" => 4, "name" => "Land Rover"]
];

$app->get('/cars', function(Request $request, Response $response) use ($cars) {
    $response->getBody()->write(json_encode($cars));
    return $response->withHeader("Content-Type", "application/json");
});

$app->get('/cars/[{id}]', function(Request $request, Response $response, $args) use ($cars) {
    $id = $args['id'];

    if (!array_key_exists($id, $cars)) {
        $response->getBody()->write("404 - Car not found");
        return $response;
    }
    $car = $cars[$id];

    $payload = json_encode($car);

    $response->getBody()->write($payload);
    return $response->withHeader("Content-Type", "application/json");
});

$app->run();