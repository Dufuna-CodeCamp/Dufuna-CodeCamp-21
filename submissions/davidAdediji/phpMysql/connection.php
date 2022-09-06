<?php


try{
    $dsn = "mysql:host=localhost;dbname=foodBag";
    $user = "root";
    $passwd = "password";
    $pdo = new PDO($dsn, $user, $passwd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connected successfully";

}catch(PDOException $e){
    die("Could not connect. ".$e->getMessage());
}



?>