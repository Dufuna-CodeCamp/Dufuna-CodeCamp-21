<?php

require_once("config.php");

echo ("<h1> Customer Order Details </h1><br/>");

// Get the id from the customer table
$id=$_GET['id'];

$cookieName = 'customerList';
// Check if cookie exists
if (! empty ($_COOKIE[$cookieName])) {
// Get cookie data
$result = unserialize($_COOKIE[$cookieName]);
} else {
        $sql = "SELECT * FROM orders WHERE id = $id";
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
    
// Save in a cookie
setcookie('orders', serialize($result), time() + 3600, '/', '', 0);
}
if(!empty ($result)) {
        
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>"; 
                echo "<th>Product Name</th>"; 
                echo "<th>Order Unit Price</th>"; 
                echo "<th>Order Quantity</th>"; 
                echo "<th>Order Total Price</th>";
                echo "<th>Order Date</th>";
                echo "<th>Customer Location</th>"; 
            echo "</tr>";

            foreach($result as $row) {
                echo "<tr>";
                    echo "<td>" .$row['id']. "</td>"; 
                    echo "<td>" .$row['product_name']. "</td>"; 
                    echo "<td>" .$row['unit_price']. "</td>"; 
                    echo "<td>" .$row['quantity']. "</td>";
                    echo "<td>" .$row['total_price']. "</td>";
                    echo "<td>" .$row['order_date']. "</td>";
                    echo "<td>" .$row['address']. "</td>";  
                echo "</tr>";
            }
        echo "</table>";
    // Free result set
    unset($result);
    
    }else{
        echo "<br/>No records where found";
    }
    
// Unset connection
unset($connection);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Order Details</title>
</head>
<body>
    <style>
        h1{
            text-align: center;
            color: brown;
        }

        table{ 
            margin-left: auto;
            margin-right: auto;
        }

        table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: brown;
            color: white;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }

        table tr:hover {
            background-color: #ddd;
        }

    </style>
</body>
</html>