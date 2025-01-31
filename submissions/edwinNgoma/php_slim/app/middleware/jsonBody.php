<?php

    namespace App\Middleware;

    use Psr\Http\Message\ResponseInterface as response;
    use Psr\Http\Message\ServerRequestInterface as request;
    use Psr\Http\Server\MiddlewareInterface as Middleware;
    use Psr\Http\Server\RequestHandlerInterface as Rhandler;

    class jsonBody implements Middleware{

        public function process(request $request, Rhandler $handler): response{

            $contentType = $request->getHeaderLine('Content-Type');

            if (strstr($contentType, "application/json")){

                $contents = json_decode(file_get_contents('php://input'), true);

                if(json_last_error() === JSON_ERROR_NONE){

                    $request = $request->withParsedBody($contents);
                }
            }

            return $handler->handle($request);
        }
    };