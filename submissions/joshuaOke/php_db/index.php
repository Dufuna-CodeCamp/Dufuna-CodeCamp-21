<?php
// save values into a cookie
if (isset($_COOKIE['customers'])) {
    echo $_COOKIE['customers'];
    // unset($_COOKIE);
} else {
    require("connection.php");

    try {
        $sql = "SELECT id, name, address , created_at FROM customers";
        $values = $connection->query($sql);
        $dataArray = [];
        if ($values->rowCount() > 0) {
            $data = "
            <form action='orders.php' method='POST'>
            <table> <thead>
                <th>S/N</th> <th>Full Name</th>
                <th>Email Address</th> <th>Created At</th>
                <th>Actions</th> </thead><tbody>";
            $i = 1;
            while ($row = $values->fetch()) {
                array_push($dataArray, $row);
                $data .= "<tr>
                <td>" . $i++ . "</td>
                <td>" . $row['name'] . "</td>
                <td>" . $row['address'] . "</td>
                <td>" . $row['created_at'] . "</td>
                <td> <button type='submit' name='customerID' value='" . $row['id'] . "'>VIEW</button></td></tr>";
            }
            $data .= "</tbody></table> </form>";
            echo $data;
            setcookie('customers', $data, time() + 30);
        }
    } catch (PDOException $e) {
        die("ERROR: " . $e->getMessage());
    }
    unset($connection);
}
