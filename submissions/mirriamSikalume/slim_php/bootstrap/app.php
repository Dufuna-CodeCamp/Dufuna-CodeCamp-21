<?php

use Slim\Factory\AppFactory;

require_once __DIR__ . "/../vendor/autoload.php";
$dotEnv = Dotenv\Dotenv::createImmutable(__DIR__ .'../../');
$dotEnv->load();


$app=AppFactory::create();
$app->addBodyParsingMiddleware();

require __DIR__ . "/../routes/api.php";

?>