<?php
require_once("connection.php");

try {

    $insert_query = 
    "INSERT INTO `customer_order_table` (`id`, `customer_id`, `product_name`, `unit_price`, `quantity`, `total_price`, `order_date`, `customer_address`) 
    VALUES 
    ('1', '1', 'mango', '2000.000', '2', '4000', current_timestamp(), 'Nkwashi estates, off Leopards road'),
    ('2', '2', 'tomato', '1000', '5', '5000', current_timestamp(), '4th avenue, Nkana East, Kitwe, Zambia'),
    ('3', '3', 'apple', '5000', '5', '25000', current_timestamp(), '7th avenue,Private state, Nigeria'),
    ('4', '4', 'pizza', '10000', '2', '20000', current_timestamp(), 'Emasdale, Lusaka'),
    ('5', '5', 'kfc king bucket', '2000', '5', '10000', current_timestamp(), 'Lusaka west, Lusaka, Zambia'),
    ('6', '6', 'KFC-king bucket', '12000', '3', '36000', current_timestamp(), 'Unza campus, Lusaka'),
    ('7', '7', 'Hungry Lion X2 pack', '500', '2', '1000', current_timestamp(), 'riverside Campus, copperbelt'),
    ('8', '8', 'fruticana fruit juice', '6.5', '2', '13', current_timestamp(), 'Mukango balacks, Lusaka'),
    ('9', '9', 'hot dog', '120', '3', '360', current_timestamp(), '4th avenue, house number 2, Cawama, Lusaka'),
    ('10', '10', 'Burger', '1000', '2', '2000', current_timestamp(), '4th avenue, Nkana East, Kitwe, Zambia')";

$conn->exec($insert_query);

echo('<br/>records inserted successfully');

} catch (PDOException $err) {
    echo ('records not inserted ' . $err->getMessage());
}

unset($conn);

?>