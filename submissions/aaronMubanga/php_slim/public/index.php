<?php

    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    require __DIR__ . '/../bootstrap/app.php';

    $app->get('/', function ( Request $request, Response $response ){
        $response->getBody()->write("Welcome..... <br><br> As you can see, It works thus far!!!");
        return $response;
    });
    
    $app->run();