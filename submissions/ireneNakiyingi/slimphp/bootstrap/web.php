<?php
use Illuminate\Container\Container;
$container = new Container();

$container["settings"]=[
'determineRouterBeforeAppMiddleware'=>false,
'displayErrorDetails'=>true,
'db'=>[
    'driver'=>'mysql',
    'host'=>$_ENV['DB_HOSTNAME'],
    'username' =>$_ENV['DB_USERNAME'],
    'password' =>$_ENV['DB_PASSWORD'],
    'database'=> $_ENV['DB_NAME'],
    'charset'=>'utf8',
    'collation'=> 'utf8_unicode_ci',
    'prefix'=> '',
    ]
];