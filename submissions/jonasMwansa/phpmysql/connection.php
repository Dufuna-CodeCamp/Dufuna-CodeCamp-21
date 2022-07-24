<?php

$host ="127.0.0.1";
$user_name ="root";
$db_name = "foodbag_db";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $user_name, $password);

    //set pdo error mode
    $conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $conn ->getAttribute(constant("PD0::ATTR_CONNECTION_STATUS"));
    }catch (PDOException $error) {
        die("Could not connect to the database :" . $error->getMessage());
    }


