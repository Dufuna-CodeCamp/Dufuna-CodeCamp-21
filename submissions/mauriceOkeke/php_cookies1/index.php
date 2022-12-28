<?php

require_once('connection.php');

    if($_SERVER["REQUEST_METHOD"]== "POST"){
      $fullname = $_POST["fullname"];
      $email = $_POST["email"];

      try{
      $sql = "INSERT INTO Customers(full_name, email) VALUES ('$fullname', '$email')";
      $conn->exec($sql);

   } catch(PDOException $e ){
      echo $sql . "<b>r" . $e->getMessage();
   }
    }

   //  to spill out
   $sql = "SELECT * FROM Customers";
   $result =  $conn->query( $sql);
   $customerInfo = [];
   if($result){
    
   while($row = $result->fetch()){
      if(!isset($_COOKIE['Customer'])){
         $cookie_value = json_encode($customerInfo);
      setcookie('Customer', $cookie_value, time() +  30, '/');
      }  
      array_push($customerInfo,$row);  
    }
    
    $cookie_value = json_encode($customerInfo); 
    if(isset($_COOKIE['Customer'])){
      echo  
      "<table style='border: 1px solid red; width: 100%; border-collapse: collapse'>
      <thead>
         <tr>
            <th style='border: 1px solid black; background-color:#04AA6D; color:white'>S/N</th>
            <th style='border: 1px solid black; background-color:#04AA6D; color:white'>Full Name</th>
            <th style='border: 1px solid black; background-color:#04AA6D; color:white'>Email Address</th>
            <th style='border: 1px solid black; background-color:#04AA6D; color:white'> Created At </th>
            <th style='border: 1px solid black; background-color:#04AA6D; color:white'> Actions </th>
         </tr>
      </thead>
      <tbody>"; 

      for ($i=0; $i < count($customerInfo) ; $i++) {   
    echo
    "<tr>
       <td style='border: 1px solid black; padding: 10px' >". $customerInfo [$i]['id']. "</td>" . 
         "<td style='border: 1px solid black;  padding: 10px;'>" . $customerInfo [$i]['full_name']. "</td>" .
         "<td style='border: 1px solid black;  padding: 10px'>" . $customerInfo [$i]['email']. "</td>" .
         "<td style='border: 1px solid black;  padding: 10px;'>" . $customerInfo [$i]['created_at']. "</td>".
         "<td style='border: 1px solid black; padding: 10px; text-align: center;'> <button> View </button> </td>
      </tr>";
     }
    
    }
}
      
   
echo 
"</tbody>
</table>";
   
  ?>

</body>
</html>




