<?php

$settings = $container->get('settings');

$db_connection = $settings['db'];
$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($db_connection);

$capsule->bootEloquent();
$capsule->setAsGlobal();

