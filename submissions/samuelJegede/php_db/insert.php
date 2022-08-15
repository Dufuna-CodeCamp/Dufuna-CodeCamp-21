<?php
require_once("connection.php");

// Attempt insert query execution
try{
    $sql = "INSERT INTO customers (full_name, email) VALUES
        ('Gift Paul' , 'bolj@gmail.com'),
        ('Bukky Schlok' , 'bukky@gmail.com'),
        ('Astha Dupe' , 'asthad@gmail.com'),
        ('Victoria Phillip' , 'vicky@gmail.com'),
        ('Wale David', 'wavid@gmail.com')";

    $pdo->exec($sql);

    echo"Records inserted successfully. ";
} catch(PDOException $e) {
    die("ERROR: Records not inserted. " . $e->getMessage());
} 

// Close connection
unset($pdo);