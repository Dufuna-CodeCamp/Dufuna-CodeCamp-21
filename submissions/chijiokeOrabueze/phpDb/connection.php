<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=food_bag_ecom", "root", "mysql");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected Successfully. Host info: ".
    $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")). "<br>";

}catch(PDOException $e){
    die("ERROR: Could not connect. ". $e->getMessage());
}

