<?php

require_once("connection.php");

try {

    $insert_query = 
    "INSERT INTO customers(full_name, email_address, created_at)
    VALUES  ('Mary Jane', 'mjane@gmail.com', now()),
            ('Peter Pan', 'pparker@gmail.com', now()),
            ('Tony Starr', 'tony@starr.co', now()),
            ('Bruce Banner', 'banner@cush.com', now()),
            ('Lois Lane', 'lane@mail.com', now())";

$db_connection->exec($insert_query);

echo('<br/>Records inserted successfully');

} catch (PDOException $error) {
    echo ('Records not inserted ' . $error->getMessage());
}

unset($db_connection);