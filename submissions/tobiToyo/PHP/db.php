<?php

require_once('connection.php');


try{
  // prepare statement
  $insert = 'INSERT into ordertable (
    Product_Name, Order_Unit_Price,Order_Total_Price,Created_Date,Customer_Location) values (:Product_Name, :Order_Unit_Price, :Order_Total_Price,:Created_Date,:Customer_Location)';

  $statement = $pdo->prepare($insert);

  // binding parameters to statements

  $statement->bindParam(':Product_Name', $_REQUEST['Product_Name']);
  $statement->bindParam(':Order_Unit_Price', $_REQUEST['Order_Unit_Price']);
  $statement->bindParam(':Order_Total_Price', $_REQUEST['Order_Total_Price']);
  $statement->bindParam(':Created_Date', date('y-m-d h:i:s'));
  $statement->bindParam(':Customer_Location', $_REQUEST['Customer_Location']);


  // execute the prepared statement
  $statement->execute();
  echo "Records inserted successfully";
}

  catch(PDOException $e){
    die('ERROR: Could not insert record. ' . $e->getMessage());
  }


unset($pdo)
?>