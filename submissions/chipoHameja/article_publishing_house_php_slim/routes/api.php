<?php
use App\Controller\ArticleController;
use Slim\Routing\RouteCollectorProxy;
use App\Middleware\JsonBodyParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group) {
    //Article publishing house
    $group->get("/articles", ArticleController::class . ":index");
    $group->get("/articles/{id}", ArticleController::class . ":getArticle");
    $group->put("/articles/{id}", ArticleController::class . ":updateArticle")->add(new JsonBodyParserMiddleware());
    $group->put("/articles/publish/{id}", ArticleController::class . ":publishArticle")->add(new JsonBodyParserMiddleware());
    $group->post("/articles", ArticleController::class . ":create")->add(new JsonBodyParserMiddleware());
    $group->delete("/articles/{id}", ArticleController::class . ":delete");
});