<?php

require_once 'pdoconfig.php';

try{
    $pdo_conn = new PDO("mysql:host=$host;dbname=$dbname", "$username", "$password");

    $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     echo "Connected to '$dbname' at '$host' successfully. Host info: " . $pdo_conn->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")). "<br>";

}catch(PDOException $e){
    die("ERROR: Could not connect to the database '$dbname' : <br/>". $e->getMessage());
}
