<?php

$db_name = 'food_bag';
$db_host = '127.0.0.1';
$db_username = 'root';
$password = '';

try {
    $connection = new PDO("mysql:host=$db_host;dbname=$db_name", $db_username, $password);

    //set pdo error mode
    $connection ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection ->getAttribute(constant("PD0::ATTR_CONNECTION_STATUS"));

    }catch (PDOException $error){
        die("Could not connect to the database :" . $error->getMessage());
    }
