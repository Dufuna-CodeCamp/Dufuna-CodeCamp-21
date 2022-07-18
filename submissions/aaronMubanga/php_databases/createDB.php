<?php

    include ('reachDB.php');

    try{

        $sql = 'CREATE DATABASE FoodBag';
        $pdo -> exec($sql);
        echo "DataBase was created! ";
    } catch (PDOException $e){
        die("ERROR: Could not execute $sql. " . $e -> getMessage());
    }



unset($pdo);

    