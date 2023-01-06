<?php

require_once('connection.php');

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orders</title>
</head>
<body>
  <h1 style="text-align: center;">Customer Details</h1>

  <?php
 
 $customerDetails = [];

   if(isset($_GET['id'])){
    $id = $_GET['id']; 
    $sql = "SELECT * FROM orders WHERE id = $id";
    $result =  $conn->query( $sql);

    if( $result->rowCount() > 0){
      while($row = $result->fetch()){
     
        if(!isset($_COOKIE['orders'])){
          $cookie_value = json_encode($customerDetails);
          setcookie('orders', $cookie_value, time() +  30, '/');
       } 
       array_push($customerDetails,$row); 
      }
      echo "
      <table style= 'border:2px solid black; width: 80%; margin: 10px auto; border-collapse: collapse;'>
      <thead>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>S/N</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Product Name</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Unit price</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Quantity</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Order total price</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Created Date</th>
      <th style= 'border:2px solid black; background-color:maroon; color:white; padding: 15px;'>Customer location</th>
      </thead>
      <tbody>";
 
      echo "
      <tr>
      <td style= 'border:2px solid black;'>" . $customerDetails[0]['id'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['product_name'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['unit_price'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['quantity'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['price'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['created_at'] . "</td>" .
      "<td style= 'border:2px solid black;'>" . $customerDetails[0]['location'] . "</td>" .
      "</tr> ";

    echo " </tbody>
</table> ";

    } else{
      echo "<p style = 'text-align:center; color: red'> <strong> No Records found </strong> </p>";
    }
   }

  


?>
   
</body>
</html>
