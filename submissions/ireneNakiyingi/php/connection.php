<?php
$servername = "localhost";
$username = "root";
$password = "Treasure12";
$db = "food_bag";
try{
    $connect = new PDO ( "mysql:$servername ;$db" ,
     $username,$password);
    $connect->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connect->exec("use food_bag");
    echo "Successful.";
} catch(PDOException $e){
    die ("ERROR: Could not connect. " . $e->getMessage());
};
?>