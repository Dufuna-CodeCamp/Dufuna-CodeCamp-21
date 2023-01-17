<?php

use Illuminate\Database\Capsule\Manager;

$settings = $container->get('settings');
$db_connection = $settings['db'];

$capsule = new Manager();
$capsule->addConnection($db_connection);

$capsule->bootEloquent();
$capsule->setAsGlobal();