<?php

require_once('config.php');

try{

    $sql = "INSERT INTO customers (full_name, email_address, created_at, actions) VALUES 
    (:full_name, :email_address, current_timestamp(), :actions)";
    $stmt = $pdo->prepare($sql);
    //Bind parameters to statement. Note that the "full_name" in $_REQUEST['full_name'] is the "name=full_name" in the html file.
    //@ $_REQUEST we can use $_POST. REQUEST is used since it can be used for POST and GET.
    $stmt ->bindParam(':full_name', $_REQUEST['full_name']);
    $stmt ->bindParam(':email_address', $_REQUEST['email_address']);
    $stmt ->bindParam(':actions', $_REQUEST['actions']);
    //Execute the prepared statement
    $stmt->execute();
    //give the last Id of my input data into the database
    $lastId = $pdo->lastInsertId();
    echo "Record inserted successfully and your ID is $lastId";

}catch (PDOException $error) {
    die("ERROR: could not execute $sql." . $error->getMessage());
}

//close connection
unset($pdo);

?>

