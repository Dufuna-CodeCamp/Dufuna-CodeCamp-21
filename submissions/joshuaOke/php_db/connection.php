<?php
try {
    $connection = new PDO("mysql:host=dufuna.local;dbname=foodbag","root","");
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: ". $e->getMessage());
}