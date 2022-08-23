<?php

require_once 'config.php';


echo "<h1>Customer Details Table</h1><br>";

try {
    $sql = "SELECT * FROM customer";

    $result = $pdo->query($sql);
    
    if($result->rowCount() > 0) {
    echo '<table>';
        echo '<tr>';
            echo '<th>S/N</th>';
            echo '<th>Full Name</th>';
            echo '<th>Email address</th>';
            echo '<th>Created At</th>';
            echo '<th>Action</th>';
        echo '</tr>';
    
        while($row= $result->fetch()) {
            echo '<tr>';
                echo "<td>" . $row['SN'] ."</td>";
                echo "<td>" . $row['Full_Name'] . "</td>";
                echo "<td>" . $row['Email'] ."</td>";
                echo "<td>" . $row['Created_At'] . "</td>";
                echo "<td><button> <a href='#'> View </a></button></td>";
            echo '</tr>';
        }
    echo '</table>';
    
    // Free result set
    unset($result);
    
    } else{
        echo "<br/>No records were found";
    }
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}

// Unset connection
unset($pdo);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
</body>
</html>