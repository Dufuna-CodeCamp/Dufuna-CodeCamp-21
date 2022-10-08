<?php 

    require_once("connection.php");

    try {
            $customer_str = "";
            $retrived_data = array();
            setcookie('CUSTOMERS', json_encode($retrived_data), time () - 86000, "/", "", false);
            if (isset($_COOKIE['CUSTOMERS'])) {
                $retrived_data = json_decode ($_COOKIE['CUSTOMERS'], true);

            }else{
            
                $sql = "SELECT * FROM customers";
                $result = $pdo->query($sql);
                if ($result->rowCount() > 0) {
                    $retrived_data = $result->fetchAll();
                    setcookie('CUSTOMERS', json_encode($retrived_data), time () + 86000, "/", "", false);
                }
            }

            if (is_array($retrived_data) && count($retrived_data) > 0) {
                foreach ($retrived_data as $customer) {
                    $customer_str .= "<tr>";
                        $customer_str .= "<td>" . htmlspecialchars($customer['id']) . "</td>";
                        $customer_str .= "<td>" . htmlspecialchars($customer['full_name']) . "</td>";
                        $customer_str .= "<td>" . htmlspecialchars($customer['email_address']) . "</td>";
                        $customer_str .= "<td>" . htmlspecialchars($customer['created_at']) . "</td>";
                        $customer_str .= "<td> <button><a href='orders.php?customer_order=" . htmlspecialchars($customer["id"]) . "'>View</a></button> </td>";
                    $customer_str .= "</tr>";

                }

            }else {
                echo("No Customer Records Where Found!");
            }
        } catch (PDOException $e) {
            die("Error: Could not able to execute sql. " .  $e->getMessage());
        }
        
    unset($pdo);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers</title>
</head>
<body>
    <table>
        <thead>
            <th>S/N</th>
            <th>Fill Name</th>
            <th>Email Address</th>
            <th>Created At</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <?= $customer_str; ?>
        </tbody>
    </table>
</body>
</html>