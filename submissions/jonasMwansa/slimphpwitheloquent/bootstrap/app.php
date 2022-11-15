<?php

use Slim\Factory\AppFactory;

require_once __DIR__ . "/../vendor/autoload.php";
$dotEnv = Dotenv\Dotenv::createImmutable(__DIR__ .'../../');
$dotEnv->load();

require 'dependencyContainer.php';
require 'servicesConfiguration.php';

//instantiate app
$app=AppFactory::create();
$app->addBodyParsingMiddleware();

require __DIR__ . "/../routes/api.php";

?>