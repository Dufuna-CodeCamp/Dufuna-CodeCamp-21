<?php

use Illuminate\Database\Capsule\Manager;
use Illuminate\Container\Container;

$container = new Container();

$container['settings']=[    
    'determineRouteBeforeAppMiddleware' => false,
        'displayErrorDetails' => true,
        'db' => [
            'driver' => 'mysql',
            'host' => $_ENV['DB_HOSTNAME'],
            'database' => $_ENV['DB_DBNAME'],
            'username' => $_ENV['DB_USERNAME'],
            'password' => $_ENV['DB_PASSWORD'],
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]
        
    ];