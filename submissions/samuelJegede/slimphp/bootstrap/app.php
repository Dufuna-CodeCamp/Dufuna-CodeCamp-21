<?php

use Dotenv\Dotenv;
use Slim\Factory\AppFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__ . '../../');
$dotenv->load();

require 'web.php';
require 'database.php';

//Instantiate the app

$app = AppFactory::create();

require __DIR__ . '/../routes/api.php';