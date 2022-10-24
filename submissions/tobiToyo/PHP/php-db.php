<?php
// connection to mysql
  try {
    $pdo = new PDO('mysql:host=localhost', 'root', 'mysql');

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected Successfully. Host info " .
    $pdo->getAttribute(constant('PDO::ATTR_CONNECTION_STATUS'));
  }
  catch(PDOException $e){
    die('ERROR: Could not connect. ' . $e->getMessage());
  }

// creating database

try{
  $sql = "CREATE DATABASE practicePhp";
  $pdo->exec($sql);
  echo "Database created successfully";
}
catch (PDOException $e) {
  die("ERROR: Could not execute $sql. " . $e->getMessage());
}


// creating table


try{
  $table = 'CREATE TABLE orderTable(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Product_Name VARCHAR(50) NOT NULL,
    Order_Unit_Price INT NOT NULL,
    Order_Total_Price INT NOT NULL,
    Created_Date INT,
    Customer_Location VARCHAR(150) NOT NULL
  )';

$pdo->exec($table);
echo 'Order Table Successfully Created';

}
catch (PDOException $e) {
  die("ERROR: Could not execute $table. " . $e->getMessage());
}

unset($pdo);
  

?>