<?php 
namespace App\Middleware;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface as MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface as Handler;

class JsonBodyParser implements MiddlewareInterface{
    public function process(Request $request,Handler $handler): Response{
        $contentType= $request->getHeaderLine('Content-Type');
        if (strstr($contentType,"application/json")){
            $contents= json_decode(\file_get_contents('php://input'), true);
            if(json_last_error() == JSON_ERROR_NONE){
                $request=$request->withParsedBody($contents);
            }
                }
            return $handler->handle($request);
    }

}
/*use App\Middleware\ValidationExceptionMiddleware;
use Selective\BasePath\BasePathMiddleware;
use Slim\App;
use Slim\Middleware\ErrorMiddleware;
return function(App $app){
    $app->addBodyParsingMiddleware();
    $app->add(ValidationExceptionMiddleware);
    $app->addRoutingMiddleware();
    $app->add(BasePathMiddleware::class);
    $app->add(ErrorMiddleware::class);
};*/