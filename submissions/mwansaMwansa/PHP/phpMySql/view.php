<?php

require_once("connection.php");

echo ("<h1>----------Customer Records-----------</h1><br/>");
try {
    $db_query = "SELECT * FROM customers";

    $result=$db_connection->query($db_query);

    if($result->rowCount()>0){
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>"; 
                echo "<th>Full Name</th>"; 
                echo "<th>Email Address</th>"; 
                echo "<th>Created At</th>"; 
                echo "<th>Actions</th>"; 
            echo "</tr>";

            while($row= $result->fetch())
            {
                echo "<tr>";
                    echo "<td>" .$row['id']. "</td>"; 
                    echo "<td>" .$row['full_name']. "</td>"; 
                    echo "<td>" .$row['email_address']. "</td>"; 
                    echo "<td>" .$row['created_at']. "</td>";
                    echo "<td><button><a href='viewCustomerOrder.php?id=".$row['id']."'>view</a></button></td>";  
                echo "</tr>";
            }
        echo "</table>";

        //free result set
        unset($result);
    
    }else{
        echo "<br/>No records where found";
    }

} catch (PDOException $error) {
    echo ("error could execute $db_query" .$error->getMessage());
}

unset($db_connection);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
</html>