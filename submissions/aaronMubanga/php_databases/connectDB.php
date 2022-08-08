<?php

    // connection
    try{

        $pdo = new PDO('mysql:host=localhost;dbname=FoodBag', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die( 'ERROR: could not connect to database ' . $e->getMessage());
    }