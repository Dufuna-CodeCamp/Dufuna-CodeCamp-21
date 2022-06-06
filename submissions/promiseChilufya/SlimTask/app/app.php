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
$app->get("/getAllArticles", ArticlesController::class . ':getAllArticles');
$app->get("/getSingleArticle/{id}", ArticlesController::class . ':getSingleArticle');
$app->delete("/deleteArticle/{id}", ArticlesController::class . ':deleteArticle');
$app->post("/createSingleArticle", ArticlesController::class . ':createSingleArticle');
$app->put("/updateSingleArticle/{id}", ArticlesController::class . ':updateSingleArticle');
$app->put("/publishArticle/{id}", ArticlesController::class . ':publishArticle');
$app->get("/getPublishedArticle", ArticlesController::class . ':getPublishedArticle');