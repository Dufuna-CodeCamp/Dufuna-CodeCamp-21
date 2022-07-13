<?php

use Illuminate\Database\Capsule\Manager;

$settings = $container->get('settings');
$connection = $settings['db'];

$capsule = new Manager();

$capsule->addConnection($connection);

$capsule->setAsGlobal();
$capsule->bootEloquent();

?>