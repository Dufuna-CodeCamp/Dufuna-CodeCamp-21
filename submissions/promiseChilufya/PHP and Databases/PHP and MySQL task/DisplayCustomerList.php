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

    <h1> Order List </h1>

    <?php

    require_once("RetrieveUsers.php");


    class Display
    {

        private $obj;
        private $result;

        function __construct()
        {

            $this->obj = new Retrieve();
            $this->result = $this->obj->RetrieveUsers();
        }

        function DisplayCustomers()
        {


            echo "<table id='customer'>";
            echo "<tr >";
            echo "<th > S/N </th>";
            echo "<th> Product Name </th>";
            echo "<th> Order Unit Price </th>";
            echo "<th> Order Quantity </th>";
            echo "<th> Order Total Price </th>";
            echo "<th> Created Date </th>";
            echo "<th> Customer Location </th>";
            
            
            echo "</tr>";

            while ($row = $this->result->fetch()) {


                echo "<tr>";

                echo "<td>" . $row['S/N'] . "</td>";
                echo "<td>" . $row['Product Name'] . "</td>";
                echo "<td>" . $row['Order Unit Price'] . "</td>";
                echo "<td>" . $row['Order Quantity'] . "</td>";
                echo "<td>" . $row['Order Total Price'] . "</td>";
                echo "<td>" . $row['Created Date'] . "</td>";
                echo "<td>" . $row['Customer Location'] . "</td>";
                echo "<td> <button id ='btn' name = 'submittedId'  ><a id='btn-link' href='DisplayCustomerList.php?Id=".$row['Id']."'>View<a/> </button></td>";
                
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
