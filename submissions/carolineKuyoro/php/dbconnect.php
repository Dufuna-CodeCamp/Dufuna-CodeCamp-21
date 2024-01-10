<?php

require_once 'pdoconfig.php';

try{
    $pdo_conn = new PDO("mysql:host=$host;dbname=$dbname", "$username", "$password");

    $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to '$dbname' at '$host' successfully. Host info: " . $pdo_conn->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")). "<br>";

}catch(PDOException $e){
    die("ERROR: Could not connect to the database '$dbname' : <br/>". $e->getMessage());
}


// insert data into the user table
// try{
//     $sql = "INSERT INTO users (full_name, email, created_at)
//         VALUES ('Ifeanyi Michael', 'michael@gmail.com', now()),
//         ('Anne Evans', 'annevans@yahoo.com', now()),
//         ('Austin Doss', 'austindoss@gmail.com', now()),
//         ('Victor Emma', 'vic@yahoo.com', now()),
//         ('Aliyu Elma', 'aliyuelma@gmail.com', now()),
//         ('Ema Watson', 'emawat@gmail.com', now())";

//         $pdo_conn->exec($sql);
//         echo "Records inserted successfully.";
// }catch (PDOException $e){
//     die("Error: Could not execute $sql." . $e->getMessage());
// }

// unset($pdo_conn);