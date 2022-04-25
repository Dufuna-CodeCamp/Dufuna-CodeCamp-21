
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Display Customers</title>
   
</head>

<body>

<h1>List Of Registered Customers</h1>

<?php

include_once("RetrieveUsers.php");


class Display {

    private $obj;
    private $result;

    function __construct()
    {

        $this->obj = new Retrieve();
        $this->result = $this->obj->RetrieveUsers();
        
    }

    function DisplayCustomers() {


            echo"<table id='customers'>";
            echo"<tr >";
            echo "<th > S/N </th>";
            echo "<th> Full Name </th>";
            echo "<th> Email Address </th>";
            echo "<th> Created At </th>";
            echo "<th> Action</th>";
            echo "</tr>";

            while($row = $this->result->fetch()) {

                
                    echo "<tr>";

                       echo "<td>".$row['S/N']."</td>";
                       echo "<td>".$row['Full Name']."</td>";
                       echo "<td>".$row['Email Address']."</td>";
                       echo "<td>".$row['Created At']."</td>";
                       echo "<td> <input id='btn' type= 'button' value='View'> </td> </tr>";

                    echo "</tr>";

               
            }
       
                   echo "</table>";


                  
    }


}

$display = new Display();

$display->DisplayCustomers();

?>
    
</body>
</html>

