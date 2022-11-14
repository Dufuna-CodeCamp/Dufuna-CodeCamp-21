<?php


    try{
        //Connecting to the database server

        $pdo = new PDO('mysql:host=localhost', 'root', '');

        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "Connected successfully! Host info; " .
        $pdo -> getAttribute(PDO::ATTR_CONNECTION_STATUS);
    }
    catch (PDOException $e){
        die('ERRO; Could not connect. ' . $e -> getMessage()); 
    }