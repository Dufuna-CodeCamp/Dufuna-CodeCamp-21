<?php

use App\Controller\TestUserController;
use Slim\Factory\AppFactory;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../app/controllers/TestUserController';

$dotenv = Dotenv::createImmutable(__DIR__, 'myconfig');

$dotenv = Dotenv::createImmutable(__DIR__ . '../../');
$dotenv->load();

require 'web.php';
require 'database.php';

//instantiate the app

$app = AppFactory::create();
$app->get('/article', TestUserController::class . ':index');


require __DIR__ . '/../routes/api.php';







