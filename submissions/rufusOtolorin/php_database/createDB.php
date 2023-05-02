<?php


    //connection variables

    $host ="127.0.0.1";
    $user_name ="root";
    $password = "mysql";


    //Connecting to the database server


    try{
        

        $pdo = new PDO("mysql:host=$host", $user_name, $password);

        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "Connected successfully! Host info; " .
        $pdo -> getAttribute(PDO::ATTR_CONNECTION_STATUS);
    }
    catch (PDOException $error){
        die('ERRO; Could not connect. ' . $error -> getMessage()); 
    }

    // Create DataBase

    try{

        $sql = 'CREATE DATABASE FoodBag';
        $pdo -> exec($sql);
        echo "DataBase was created! ";
    } catch (PDOException $error){
        die("ERROR: Could not execute $sql. " . $error -> getMessage());
    }



unset($pdo);