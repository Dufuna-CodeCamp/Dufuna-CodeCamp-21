<?php

if (isset($_COOKIE['customer_orders'])) {
    echo $_COOKIE['customer_orders'];
    // unset($_COOKIE);
} else {
    require("connection.php");

    try {
        $sql = "select vendor_food.name AS product, vendor_food.amount AS price,
        orders.order_qty AS qty, orders.order_price AS amounts, orders.order_date AS date,
        customers.address AS location FROM vendor_food, orders, customers
        WHERE customers.id = " . $_REQUEST['customerID'] . " AND 
        orders.customer_id = customers.id AND 
        orders.vendor_id = vendor_food.id;";

        $orders = $connection->query($sql);

        if ($orders->rowCount() > 0) {
            $data = "
            <form action='orders.php' method='POST'>
            <table> <thead>
            <th>S/N</th>
            <th>Product Text</th>
            <th>Order Unit Price</th>
            <th>Order Quantity</th>
            <th>Order Total Price</th>
            <th>Created Date</th>
            <th>Customer Location</th>
            </thead><tbody>";

            $i = 1;
            while ($row = $orders->fetch()) {
                $data .= "<tr>
                <td>" . $i++ . "</td>
                <td>" . $row['product'] . "</td>
                <td>" . $row['price'] . "</td>
                <td>" . $row['qty'] . "</td>
                <td>" . $row['amounts'] . "</td>
                <td>" . $row['date'] . "</td>
                <td>" . $row['location'] . "</td>";
            }
            $data .= "</tbody></table> </form>";
            echo $data;
            setcookie('customer_orders', $data, time() + 2);
        }
    } catch (PDOException $e) {
        die("ERROR: " . $e->getMessage());
    }
    unset($connection);
}
