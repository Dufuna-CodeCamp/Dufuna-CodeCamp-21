<?php

$servername = "localhost";
$username = "root";
$password = "mysql";
$db = "food_bag";
try{
    $connect = new PDO ( "mysql:$servername "  . "dbname=$db" ,
     $username,$password);
    $connect->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connect->exec("use food_bag");
} catch(PDOException $e){
    die ("ERROR: Could not connect. " . $e->getMessage());
};