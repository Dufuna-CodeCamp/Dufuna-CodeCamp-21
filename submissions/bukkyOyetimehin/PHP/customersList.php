<?php
// Include config file
require_once "config.php";
echo "<h1> List of Customers </h1>";
// Attempt select query execution
$sql = "SELECT id, first_name, last_name, customer_email, created_at FROM customers";
$result = $pdo->query($sql);
/* Table Construction */
if ($result->rowCount() > 0) {
    echo "<table>";
    echo "<tr>";
    echo "<th>S/N</th>";
    echo "<th>First_Name</th>";
    echo "<th>Last_Name</th>";
    echo "<th>Customer_Email</th>";
    echo "<th>Created_At</th>";
    echo "<th>Actions</th>";
    echo "</tr>";
    /* PHP code to fetch data from rows.loop will iterate until all data is fetched */
    while ($row = $result->fetch()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['first_name'] . "</td>";
        echo "<td>" . $row['last_name'] . "</td>";
        echo "<td>" . $row['customer_email'] . "</td>";
        echo "<td>" . $row['created_at'] . "</td>";
        echo "<td>" . "<a href='list-of-orders.php?id=$row[id]>$row[first_name]' class='view-btn'>View Order</a>" . "</td>";
        echo "</tr>";
    }
    echo "</table>";

    $customersList = $result->fetchAll();

    //Setting the Cookie
    setcookie("customersBrief", json_encode($customersList), time() + 3600);
    if (isset($_COOKIE["customersBrief"])) {
        echo $_COOKIE["customersBrief"];
        //Free result test
        unset($customersList);
    } else {
        echo "No records matching your query were found.";
    }
} else {
    echo "No results to display";
}
// Close connection
unset($pdo);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Customers Details</title>
    <!-- CSS FOR STYLING THE PAGE -->
    <style>
        table {
            margin: 0 auto;
            font-size: large;
            border: 1px solid black;
        }

        h1 {
            text-align: center;
            color: #006600;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT',
                ' Calibri', 'Trebuchet MS', 'sans-serif';
        }

        td {
            background-color: #E4F5D4;
            border: 1px solid black;
        }

        th,
        td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        td {
            font-weight: lighter;
        }

        .view-btn {
            color: black;
            background-color: #009432;
            font-weight: bold;
            padding: 0.5rem;
            font-size: medium;
            text-decoration: none;
        }

        .view-btn:hover {
            background: #006266;
        }
    </style>
</head>

<body>
</body>

</html>