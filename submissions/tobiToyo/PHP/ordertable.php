<?php

  require_once("connection.php");



  try{
    $select = 'SELECT * from ordertable';
    $result = $pdo->query($select);

    if($result->rowCount() > 0){
      echo '<table>';
        echo '<tr>';
          echo '<th>id</th>';
          echo '<th>Product Name</th>';
          echo '<th>Order Unit Price</th>';
          echo '<th>Order Total Price</th>';
          echo '<th>Created Date</th>';
          echo '<th>Customer Location</th>';
        echo '</tr>';

        while($row = $result->fetch()){
          echo '<tr>';
            echo '<td>' . $row['id'] . '</td>';
            echo '<td>' . $row['Product_Name'] . '</td>';
            echo '<td>' . $row['Order_Unit_Price'] . '</td>';
            echo '<td>' . $row['Order_Total_Price'] . '</td>';
            echo '<td>' . $row['Created_Date'] . '</td>';
            echo '<td>' . $row['Customer_Location'] . '</td>';
          echo '</tr>';
        }
        echo '</table>'; 

        unset($result);
    }
    else{
      echo 'No records matching your query were found.';
    }

  }


  catch(PDOException $e){
    die('ERROR: Could not insert record. ' . $e->getMessage());
  }


unset($pdo)





?>