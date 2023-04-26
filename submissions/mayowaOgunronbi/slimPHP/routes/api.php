<?php

    use App\Controller\ArticlesController;
    use App\Middleware\JsonParserMiddleware;
    use Slim\Routing\RouteCollectorProxy;

    $app->group('/api', function(RouteCollectorProxy $group){

    // ENDPOINT 1: TO CREATE A NEW ARTICLE 
    $group->post('/articles', ArticlesController::class . ":create")->add(new JsonParserMiddleware());

    // ENDPOINT 2: TO UPDATE AN EXISTING ARTICLE
    $group->post('/articles/{id}', ArticlesController::class . ":update")->add(new JsonParserMiddleware());

    // ENDPOINT 3 - TO DELETE AN EXISTING ARTICLE
    $group->delete('/articles/{id}', ArticlesController::class . ":delete");

    // ENDPOINT 4: TO PUBLISH AN UNPUBLISHED ARTICLE 
    $group->post('/publish/{id}', ArticlesController::class . ":publish")->add(new JsonParserMiddleware());

    // ENDPOINT 5: TO SHOW ALL PUBLISHED ARTICLES 
    $group->get('/articles', ArticlesController::class . ":view_published");

    // ENDPOINT 6: TO RETRIEVE JUST A SINGLE ARTICLE
    $group->get('/articles/{id}', ArticlesController::class . ":getArticle");

});

