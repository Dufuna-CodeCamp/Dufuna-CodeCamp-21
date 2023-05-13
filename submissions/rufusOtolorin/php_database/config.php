<?php

//connection variables

$host ="127.0.0.1";
$user_name ="root";
$db_name = "FoodBag";
$password = "mysql";

//connection

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name", $user_name, $password);

    //set pdo error mode
    $pdo ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch (PDOException $error) {
    die("Could not connect to the database :" . $error->getMessage());
}

