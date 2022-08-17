<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Customer Order List</title>
</head>
<body>


<?php


include_once("RetrieveUsers.php");

$obj = new Retrieve();

$id = $_GET['Id'];

$result = $obj->RetrieveUsersOrders($id);

if ($result!=null) {

    while ($row = $result->fetch()) {
         ?>
         
         <div class="container">
         <?php
         echo" S/N = " .$row["S/N"].'<br/><br/>';
         echo" Product Name = " .$row["Product Name"].'<br/><br/>';
         echo" Order Unit Price = " .$row["Order Unit Price"].'<br/><br/>';
         echo" Order Quantity = " .$row["Order Quantity"].'<br/><br/>';
         echo" Order Total Price = " .$row["Order Total Price"].'<br/><br/>';
         echo" Created Date = " .$row["Created Date"].'<br/><br/>';
         echo" Customer Location = " .$row["Customer Location"].'<br/><br/>';
         ?>

         </div> 

         <?php
    }

} else {

    echo "Wala";
}

?>
    
</body>
</html>

