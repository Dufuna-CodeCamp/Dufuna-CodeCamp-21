<?php
require_once("connection.php");

try {

    $sql = "INSERT INTO customer_order (id, customer_id, product_name, unit_price, quantity, total_price, order_date, customer_address) 
     VALUES
    ('1', '1' , 'Refuel Max', '5000', '2', '10000', current_timestamp(), 'Kano'),
    ('2', '2' , 'Refuel Max', '5000', '1', '5000', current_timestamp(), 'Osogbo'),
    ('3', '3' , 'KFC King-bucket', '2000', '4', '8000', current_timestamp(), 'Ibadan'),
    ('4', '4' , 'Refuel Max', '5000', '2', '10000', current_timestamp(), 'Owerri'),
    ('5', '5' , 'KFC king-bucket', '2000', '3', '6000', current_timestamp(), 'Abuja')";

$pdo->exec($sql);

echo"Records inserted successfully. ";
} catch (PDOException $e) {
    die ('Records not inserted ' . $e->getMessage());
}

unset($pdo);