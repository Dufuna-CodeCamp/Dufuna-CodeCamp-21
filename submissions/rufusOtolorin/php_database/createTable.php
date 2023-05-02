<?php

    require_once('config.php');

    try{
        $sql = 'CREATE TABLE customers(
            id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
            full_name VARCHAR(255) NOT NULL,
            email_address VARCHAR(255) NOT NULL UNIQUE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            actions VARCHAR(255) NOT NULL
            )';
        $pdo ->exec($sql);
        echo('Table(s) created successfully!');
    } catch (PDOException $error) {
        die('Error: Could not create table: ' . $error->getMessage());
    }

    unset($pdo);