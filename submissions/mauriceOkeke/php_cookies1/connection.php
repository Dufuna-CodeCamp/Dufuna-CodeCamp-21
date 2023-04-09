<?php

$servername = "dufuna.local";
$username = "root";
$password = "";


try {
    $conn = new PDO("mysql:host=$servername;dbname=foodbag", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
 
 } catch (PDOException $e) {
    echo "Connection failed: ".  $e->getMessage(); 
 }
 
 