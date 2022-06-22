<?php

require_once("connection.php");

try {

    $insert_query = 
    "INSERT INTO customers(full_name, email_address, created_at)
    VALUES  ('Mary Jane', 'mjane@gmail.com', now()),
            ('Peter Parker', 'parker@gmail.com', now()),
            ('Tony Stark', 'tony@stark.com', now()),
            ('Bruce Banner', 'banner@cush.com', now()),
            ('Lois Lane', 'lane@mail.com', now())";

$db_connection->exec($insert_query);

echo('<br/>Records inserted successfully');

} catch (PDOException $error) {
    echo ('Records not inserted ' . $error->getMessage());
}

unset($db_connection);

