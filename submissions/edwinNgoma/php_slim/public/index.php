<?php

    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    require __DIR__ . '/../bootstrap/app.php';

    $app->get('/', function ( Request $request, Response $response ){
        $response->getBody()->write("<div style=' height:100vh; position: relative; top: 25em; display: flex;
        flex-direction: column; align-items: center; position: relative; top: 13em;' >
        <h1>WELCOME</h1>
        <p>to</p>
        <h2>Edy's Articles</h2>
        It works thus far!!!</div>");
        return $response;
    });
    
    $app->run();