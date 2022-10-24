<?php

  require_once("connection.php");

  $cookieName = 'customerList';

// 1. check if cookie exists
if (! empty($_COOKIE[$cookieName])) {
    // 2. get cookie data
    $result = unserialize($_COOKIE[$cookieName]);
}
else {
    // 3. there is no cookie, load data from database
    $select = "select id,Full_Name,Email_Address,Created_At from customerTable;";
    $stmt = $pdo->prepare($select);
    $stmt->execute();
    $result = $stmt->fetchAll();
    // save in cookie
    setcookie($cookieName, serialize($result),time() + 3600,"/","",0);
}

if(!empty($result)) {
  echo "<h1>List of Customers</h1>";
  echo '<table>';
    echo '<tr>';
      echo '<th>S/N</th>';
      echo '<th>Full Name</th>';
      echo '<th>Email Address</th>';
      echo '<th>Created At</th>';
      echo '<th>Actions</th>';
    echo '</tr>';

    foreach($result as $row ){
      echo '<tr>';
        echo '<td>' . $row['id'] . '</td>';
        echo '<td>' . $row['Full_Name'] . '</td>';
        echo '<td>' . $row['Email_Address'] . '</td>';
        echo '<td>' . $row['Created_At'] . '</td>';
        echo '<td> <input type="button" value="View"> </td>';
      echo '</tr>';
    }
    echo '</table>'; 

    unset($result);
}
    else{
      echo 'No records matching your query were found.';
    }


unset($pdo)





?>