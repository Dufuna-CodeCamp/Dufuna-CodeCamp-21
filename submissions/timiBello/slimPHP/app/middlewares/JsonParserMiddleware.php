<?php

    namespace App\Middleware;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Server\MiddlewareInterface;
    use Psr\Http\Server\RequestHandlerInterface as Rhandler;

    class JsonParserMiddleware implements MiddlewareInterface{

        public function process(Request $request, Rhandler $handler): Response{

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