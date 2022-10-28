<?php

require_once('connection.php');

try{
  $table = 'CREATE TABLE customerTable(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Full_Name VARCHAR(50) NOT NULL,
    Email_Address VARCHAR(50) NOT NULL,
    Created_At DATETIME
  )';

$pdo->exec($table);
echo 'Order Table Successfully Created';

}
catch (PDOException $e) {
  die("ERROR: Could not execute $table. " . $e->getMessage());
}


?>

