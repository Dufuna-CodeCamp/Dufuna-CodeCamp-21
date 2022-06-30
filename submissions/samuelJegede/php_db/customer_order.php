<?php

require_once("connection.php");

echo ("<h3>CUSTOMER ORDER DETAILS</h3><br/>");

//we get the id from the customer page
$id=$_GET['id'];

//quering the database
try {
    $sql = "SELECT * FROM customer_order WHERE customer_id=$id";

    $result = $pdo->query ($sql);

    if($result->rowCount()>0){
        
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

            while($row= $result->fetch()){
                echo "<tr>";
                    echo "<td>" .$row['id']. "</td>"; 
                    echo "<td>" .$row['product_name']. "</td>"; 
                    echo "<td>" .$row['unit_price']. "</td>"; 
                    echo "<td>" .$row['quantity']. "</td>";
                    echo "<td>" .$row['total_price']. "</td>";
                    echo "<td>" .$row['order_date']. "</td>";
                    echo "<td>" .$row['customer_address']. "</td>";  
                echo "</tr>";
            }

        echo "</table>";
        unset($result);
    
    }else{
        echo "No records where found";
    }

} catch (PDOException $err) {
    echo ("error could execute $sql." .$err->getMessage());
}

unset($pdo);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>customers order details</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
</html>