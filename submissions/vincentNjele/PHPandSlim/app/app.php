<?php

ini_set("display_errors","On");
use App\Controllers\AdminController;
use App\Controllers\ArticlesController;

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config/db.php';

$app = AppFactory::create();
$app->addBodyParsingMiddleware();

$app->get("/user", AdminController::class . ':index');
$app->get("/article", ArticlesController::class . ':index');
$app->get("/getSingle/{id}", ArticlesController::class . ':getById');
$app->delete("/delete/{id}", ArticlesController::class . ':delete');
$app->post("/create", ArticlesController::class . ':create');
$app->put("/update/{id}", ArticlesController::class . ':update');
$app->put("/publish/{id}", ArticlesController::class . ':publish');
$app->get("/getPublished", ArticlesController::class . ':getPublished');
