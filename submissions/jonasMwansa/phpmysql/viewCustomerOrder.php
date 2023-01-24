<?php

require_once("connection.php");

echo ("<h1>-------------------CUSTOMER ORDER DETAILS----------------</h1><br/>");

//we get the id from the customer page
$id=$_GET['id'];

//quering the database
try {
    $db_query = "SELECT * FROM customer_order_table WHERE customer_id=$id";

    $result=$conn->query($db_query);

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

            while($row= $result->fetch())
            {
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

        //free result set
        unset($result);
    
    }else{
        echo "<br/>No records where found";
    }

} catch (PDOException $err) {
    echo ("error could execute $db_query" .$err->getMessage());
}

unset($conn);

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