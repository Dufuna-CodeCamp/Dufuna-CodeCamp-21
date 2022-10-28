<?php 

    try {
        $pdo = new PDO("mysql:host=localhost;dbname=foodbag_db","root","");

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "connected Successfully. host info: " . 
        $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")); 
    } catch (PDOException $e) {
        die("ERROR: Could not connect to database. " . $e->getMessage());
    }

?>