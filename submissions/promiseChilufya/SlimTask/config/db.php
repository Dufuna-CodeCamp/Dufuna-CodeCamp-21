
<?php
use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager;

$container = new Container();

$container["settings"] = [

    'determinRouteBeforeAppMiddleware' => false,
    'displayerrorDetails' => true,
    'db' => [

        'driver' => 'mysql',
        'host' => "127.0.0.1",
        'database' => "Article",
        'username' => "root",
        'password' => "",
        'prefix' => '',
    ]

    ];

$settings = $container->__get('settings');
$db_connection = $settings['db'];

$capsule = new Manager();
$capsule->addConnection($db_connection);

$capsule->bootEloquent();
$capsule->setAsGlobal();