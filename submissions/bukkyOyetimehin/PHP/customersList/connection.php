<?php

try {
    $db_connection = new PDO("mysql:host=localhost;dbname=foodbag", "root", "1234");

    $db_connection-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connected successfully. Host info: ".$pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS"));
}catch(PDOException $e){
    die("ERROR: Could not connect. ".$e->getMessage());
}