<?php

require_once("config.php");

$cookieName = 'customerList';
// Check if cookie exists
if (! empty ($_COOKIE[$cookieName])) {
// Get cookie data
$result = unserialize($_COOKIE[$cookieName]);
} else {
        $sql = "SELECT SN, Full_Name, Email, Created_At, Actions FROM customer";
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
    
// Save in a cookie
setcookie('customer', serialize($result), time() + 3600, '/', '', 0);
}

if(!empty ($result)) {
        echo "<h1>Customer Details Table</h1>";
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>"; 
                echo "<th>Full Name</th>"; 
                echo "<th>Email Address</th>"; 
                echo "<th>Created At</th>"; 
                echo "<th>Actions</th>"; 
            echo "</tr>";

            foreach($result as $row) {
                echo "<tr>";
                    echo "<td>" .$row['SN']. "</td>"; 
                    echo "<td>" .$row['Full_Name']. "</td>"; 
                    echo "<td>" .$row['Email']. "</td>"; 
                    echo "<td>" .$row['Created_At']. "</td>";
                    echo "<td><button><a href='orders.php?id=".$row['SN']."'>view</a></button></td>";  
                echo "</tr>";
            }
        echo "</table>";

        // Free result set
        unset($result);
    
    }else{
        echo "<br/>No records where found";
    }
// Unset connection
unset($connection);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Details</title>
</head>
<body>
    <style>
        h1{
            text-align: center;
            color: brown;
        }

        table{ 
            margin-left: auto;
            margin-right: auto;
        }

        table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: brown;
            color: white;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }

        table tr:nth-child(even){
            background-color: #f2f2f2;
        }

        table tr:hover {
            background-color: #ddd;
        }

        table button{
            cursor: pointer;
        }

        button a{
            text-decoration: none;
            color: black;
        }
    </style>
</body>
</html>