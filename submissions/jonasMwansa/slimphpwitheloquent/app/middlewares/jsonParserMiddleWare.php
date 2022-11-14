<?php

namespace App\Middleware;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;



class jsonBodyParserMiddleware implements MiddlewareInterface{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler)
    : ResponseInterface
    {
        $content_type = $request->getHeaderLine('Content-Type');
        if(strstr($content_type, 'application/jason'))
        {
            $contents = json_decode(\file_get_contents('php://input'),true);
            if(json_last_error()===JSON_ERROR_NONE){
                $request= $request->withParsedBody($contents);
            }          
        }
        return $handler->handle($request);
    }
}


?>