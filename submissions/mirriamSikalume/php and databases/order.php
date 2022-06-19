<?php

require_once("connection.php");

echo ("<h1>CUSTOMER ORDER DETAILS</h1><br/>");

//get id from the address bar
$id=$_GET['id'];

//quering the database
try {
    $query = "SELECT * FROM order_details_table WHERE id=$id";

    $the_result=$connection->query($query);

    if($the_result->rowCount()>0){
        
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>"; 
                echo "<th>Product Name</th>"; 
                echo "<th>Unit Price</th>"; 
                echo "<th>Quantity</th>"; 
                echo "<th>Total</th>";
                echo "<th>Date</th>";
                echo "<th>Location</th>"; 
            echo "</tr>";

            while($row= $the_result->fetch())
            {
                echo "<tr>";
                    echo "<td>" .$row['id']. "</td>"; 
                    echo "<td>" .$row['name']. "</td>"; 
                    echo "<td>" .$row['unit_price']. "</td>"; 
                    echo "<td>" .$row['quantity']. "</td>";
                    echo "<td>" .$row['total_price']. "</td>";
                    echo "<td>" .$row['order_date']. "</td>";
                    echo "<td>" .$row['location']. "</td>";  
                echo "</tr>";
            }
        echo "</table>";

    
    }else{
        echo "<br/>No records where found";
    }

} catch (PDOException $exception) {
    echo ("error could execute $query" . $exception->getMessage());
}


?>
