<?php

require_once("connection.php");

echo ("<h1>----------customer records-----------</h1><br/>");
try {
    $db_query = "SELECT * FROM customer_table";

    $result=$conn->query($db_query);

    if($result->rowCount()>0){
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>"; 
                echo "<th>Full Name</th>"; 
                echo "<th>Email Address</th>"; 
                echo "<th>Created At</th>"; 
                echo "<th>Actions</th>"; 
            echo "</tr>";

            while($row= $result->fetch())
            {
                echo "<tr>";
                    echo "<td>" .$row['id']. "</td>"; 
                    echo "<td>" .$row['full_name']. "</td>"; 
                    echo "<td>" .$row['email_address']. "</td>"; 
                    echo "<td>" .$row['created_at']. "</td>";
                    echo "<td><button>view</button></td>";  
                echo "</tr>";
            }
        echo "</table>";

        //free result set
        unset($result);
    
    }else{
        echo "<br/>No records where found";
    }

} catch (PDOException $err) {
    echo ("error could execute $db_query" .$err->getMessage());
}

unset($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>customers</title>
    <style>
        h1{
            text-align: center;
        }

             table{ 
                margin-left: auto;
                margin-right: auto;
                }


    table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
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
    </style>
</head>
<body>
    
</body>
</html>