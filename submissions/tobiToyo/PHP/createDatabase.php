 <?php

 require_once('connection.php');

 try{
  $sql = "CREATE DATABASE newFoodbagForPhpTask";
  $pdo->exec($sql);
  echo "Database created successfully";
}
catch (PDOException $e) {
  die("ERROR: Could not execute $sql. " . $e->getMessage());
}



  unset($pdo);
?>