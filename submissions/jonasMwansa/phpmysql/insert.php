<?php
require_once("connection.php");

try {

    $insert_query = 
    "INSERT INTO customer_table(full_name, email_address)
    VALUES  ('mwansa mwansa', 'jonasmwansa7@gmail.com'),
            ('vin njele', 'njele7@gmail.com'),
            ('jason mutale', 'jason@gmail.com'),
            ('paul parker', 'parker@cotacush.com'),
            ('lynn mambo', 'lynnm@gmail.com')";

$conn->exec($insert_query);

echo('<br/>records inserted successfully');

} catch (PDOException $err) {
    echo ('records not inserted ' . $err->getMessage());
}

unset($conn);

?>