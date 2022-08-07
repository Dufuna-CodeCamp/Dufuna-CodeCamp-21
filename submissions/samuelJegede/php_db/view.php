<?php

require_once("connection.php");

echo "<h3>Customers</h3>";

try{
    $sql = "SELECT * FROM customers";

    $result = $pdo->query ($sql);

    if ($result->rowCount() > 0) {
        echo "<table>";
            echo"<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created at</th>";
                echo "<th>Actions</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
                echo "<td>" .$row['id'] . "</td>";
                echo "<td>" .$row['full_name'] . "</td>";
                echo "<td>" .$row['email'] . "</td>";
                echo "<td>" .$row['created_at'] . "</td>";
                echo "<td><button><a href='customer_order.php?id=".$row['id']."'>View</a></button></td>";  
            echo "</tr>";
        }

        echo "</table>";
        unset($result);
    } else {
        echo "No records were found.";
    }
} catch(PDOException $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
} 

// Close connection
unset($pdo);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers order details</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
</html>