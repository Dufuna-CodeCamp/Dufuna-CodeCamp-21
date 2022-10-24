<?php

require_once('connection.php');


try{
  // prepare statement
  $insert = 'INSERT into customerTable (
    Full_Name, Email_Address, Created_At) values (:Full_Name, :Email_Address, :Created_At)';

  $statement = $pdo->prepare($insert);

  // binding parameters to statements
  $statement->bindParam(':Full_Name', $_REQUEST['Full_Name']);
  $statement->bindParam(':Email_Address', $_REQUEST['Email_Address']);
  $statement->bindParam(':Created_At', date('y-m-d h:i:s'));
  
  // execute the prepared statement
  $statement->execute();
  echo "Records inserted successfully";
}

  catch(PDOException $e){
    die('ERROR: Could not insert record. ' . $e->getMessage());
  }


unset($pdo)
?>