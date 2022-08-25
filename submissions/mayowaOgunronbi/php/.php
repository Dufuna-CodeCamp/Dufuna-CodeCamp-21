<?php

        require_once ('config.php');

        // Setting the cookie
        setcookie("customers", "result", time() + 3600);
      
        $sql = "select SN, Full_Name, Email, Created_At, Actions FROM customer";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        echo "<h1>Customer Details Table</h1>";
                   
            if($stmt->rowCount() > 0) {
            echo '<table>';
                echo '<tr>';
                    echo '<th>S/N</th>';
                    echo '<th>Full Name</th>';
                    echo '<th>Email address</th>';
                    echo '<th>Created At</th>';
                    echo '<th>Action</th>';
                echo '</tr>';
            
                foreach($result as $row) {
                    echo '<tr>';
                        echo "<td>" . $row['SN'] ."</td>";
                        echo "<td>" . $row['Full_Name'] . "</td>";
                        echo "<td>" . $row['Email'] ."</td>";
                        echo "<td>" . $row['Created_At'] . "</td>";
                        echo "<td><button> <a href='orders.php'> View </a></button></td>";
                    echo '</tr>';
                }
            echo '</table>';
 } else {
    echo "No results to display";
}

if (isset($_COOKIE["customers"])) {
    echo $_COOKIE["customers"];
    //Free result test
    unset($customers);
} else {
    echo "No records matching your query were found.";
}
// Close connection
unset($pdo);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CustomerList</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <style>
        `h1{
            margin-left: 8%;
            margin-top: 40px;
            color: rgb(184, 43, 43);
        }

        table th {
            background-color: rgb(184, 43, 43);
            color: white;
            padding: 10px;
            text-align: start;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 10px;
        }

        tr:hover {
            background-color: rgb(219, 201, 201);
        }

        button{
            cursor: pointer;
        }

        button a{
            text-decoration: none;
            color: grey;
        }`
    </style>


</body>
</html>


