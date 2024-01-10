<?php
// Include config file
require_once "config.php";
echo "<h1> List of Customer Orders </h1>";
try {
    $customer_id = 0;
    if (isset($_GET['id'])) {
        $customer_id = $_GET['id'];
    } else {
        echo 'Customer does not exist';
        exit;
    }
    //Write a Select Statement that joins the Products, Customers_addresses, Orders and Order_items Tables.
    $sql = "SELECT order_items.order_id, orders.customer_id, products.product_name, order_items.unit_price, order_items.quantity, order_items.total_amount, orders.created_at, customers_addresses.street_address, customers_addresses.city,customers_addresses.state, customers_addresses.country
        FROM orders 
        RIGHT JOIN customers_addresses ON orders.customer_id = customers_addresses.customer_id
        RIGHT JOIN order_items ON orders.id = order_items.order_id
        LEFT JOIN products ON order_items.product_id = products.id";
    $result = $pdo->query($sql);
    //Count the rows
    if ($result->rowCount() != 0) {
        /* Table Construction */
        echo "<table>";
        echo "<tr>";
        echo "<th>S/N</th>";
        echo "<th>Product Name</th>";
        echo "<th>Customer ID</th>";
        echo "<th>Order Unit Price</th>";
        echo "<th>Quantity</th>";
        echo "<th>Order Total Price</th>";
        echo "<th>Order Date & Time</th>";
        echo "<th>Customer Location</th>";
        echo "</tr>";
      /* PHP code to fetch data from rows.loop will iterate until all data is fetched */
        foreach ($result as $row) {
            echo "<tr>";
            echo "<td>" . $row['order_id'] . "</td>";
            echo "<td>" . $row['product_name'] . "</td>";
            echo "<td>" . $row['customer_id'] . "</td>";
            echo "<td>" . $row['unit_price'] . "</td>";
            echo "<td>" . $row['quantity'] . "</td>";
            echo "<td>" . $row['total_amount'] . "</td>";
            echo "<td>" . $row['created_at'] . "</td>";
            echo "<td>" . $row['street_address'] . ", " . $row['city'] . ", " . $row['state'] . ", " . $row['country'] . "." . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    }
    $customersList = $result->fetchAll();
    //Setting the Cookie
    setcookie("customerOrders", json_encode($customersList), time() + 3600);
    if (isset($_COOKIE["customerOrders"])) {
        echo $_COOKIE["customerOrders"];
        //Free result test
        unset($result);
    } else {
        echo "No records matching your query were found.";
    }
} catch (PDOException $e) {
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
// Close connection
unset($pdo);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Customer Order Details</title>
    <!-- CSS FOR STYLING THE PAGE -->
    <style>
        table {
            margin: 0 auto;
            font-size: large;
            border: 1px solid black;
        }

        h1 {
            text-align: center;
            color: #006600;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT',
                ' Calibri', 'Trebuchet MS', 'sans-serif';
        }

        td {
            background-color: #E4F5D4;
            border: 1px solid black;
        }

        th,
        td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        td {
            font-weight: lighter;
        }
    </style>
</head>

<body>
</body>

</html>