<?php

$host ="127.0.0.1";
$user_name ="root";
$db_name = "food_bag";
$password = "mysql";

try {
    $connection = new PDO("mysql:host=$host;dbname=$db_name", $user_name, $password);

    //set pdo error mode
    $connection ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch (PDOException $error) {
    die("Could not connect to the database :" . $error->getMessage());
}