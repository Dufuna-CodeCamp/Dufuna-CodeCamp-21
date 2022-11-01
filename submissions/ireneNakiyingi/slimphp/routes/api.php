<?php
use App\Controller\ArticlesController;
use App\Middleware\JsonBodyParser;
use Slim\Routing\RouteCollectorProxy;

require __DIR__ . '/../app/middlewares/JsonParserMiddleware.php';
require __DIR__ . '/../app/controllers/ArticleControllers.php';

$app->group('/api', function (RouteCollectorProxy $group){
    #1new article
    $group->post('/new', ArticlesController::class . ":create") //works
    ->add( new JsonBodyParser());
    #2update existing
    $group->put('/update/{id}', ArticlesController::class . ":update")//works
    ->add(new JsonBodyParser());
    #3delete existing
    $group->delete('/delete/{id}', ArticlesController::class . ":delete"); //works
    #4publish unpublished
    $group->post('/publish/{id}', ArticlesController::class . ":publish")//works
    ->add(new JsonBodyParser());
    #5show all published
    $group->get('/articles', ArticlesController::class . ":view_published");//works
    #6retrieve one
    $group->get('/articles/{id}', ArticlesController::class . ":getArticle"); //works
    
    
});
echo "api working";
