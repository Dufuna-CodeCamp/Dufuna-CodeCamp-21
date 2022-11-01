<?php
use Slim\Factory\AppFactory;
//use Selective\BasePath\BasePathMiddleware;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

$dotenv= Dotenv::createImmutable(__DIR__ . "../../");
$dotenv->load();

require 'web.php';
require 'database.php';
#instantiate app

$app= AppFactory::create();
// Add Slim routing middleware
//$app->addRoutingMiddleware();

// Set the base path to run the app in a subdirectory.
// This path is used in urlFor().
//$app->add(new BasePathMiddleware($app));

//$app->addErrorMiddleware(true, true, true);

// app routes
//moved to index.php before run app
require __DIR__ . '/../routes/api.php';
//run app