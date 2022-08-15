<?php

    use Slim\Routing\RouteCollectorProxy as proxy;
    use App\Controller\ArticlesController;
    use App\Middleware\jsonBody;

    $app->group('/api', function(proxy $group){
        $group->get('/articles', ArticlesController::class . ":published");

        $group->get('/articles/{id}', ArticlesController::class . ":article");

        $group->post('/add', ArticlesController::class . ":Add_article")
            ->add(new jsonBody());

        $group->put('/modify/{id}', ArticlesController::class . ":modify")
             ->add(new jsonBody());

        $group->put('/publish/{id}', ArticlesController::class . ":publish")
            ->add(new jsonBody());

        $group->delete('/delete/{id}', ArticlesController::class . ":del");
    });