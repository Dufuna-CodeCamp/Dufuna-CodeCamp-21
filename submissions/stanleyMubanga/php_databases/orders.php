<?php 

    require_once("connection.php");

    try {
            $customer_id = isset($_GET['customer_order']) ? (int)$_GET['customer_order'] : false;
            if (!$customer_id) {
                die ("No Such Id");
            }

            $order_str = "";
            $retrived_data = array();
            if (isset($_COOKIE['ORDERS'])) {
                $cookie_data = json_decode ($_COOKIE['ORDERS'], true);
                // var_dump($cookie_data);die;
                $customer = false;
                foreach ($cookie_data as $data) {
                    if ($customer_id === $data['customer_id']) {
                        $customer = true;
                    }
                }

                if ($customer) {
                    $retrived_data = $cookie_data;
                }else {
                    $sql = "SELECT * FROM orders WHERE customer_id = $customer_id";
                    $result = $pdo->query($sql);
                    if ($result->rowCount() > 0) {
                        $retrived_data = $result->fetchAll();
                        setcookie('ORDERS', json_encode($retrived_data), time () + 86000, "/", "", false);
                    }
                }
                
            }else{
                
                $sql = "SELECT * FROM orders WHERE customer_id = $customer_id";
                $result = $pdo->query($sql);
                if ($result->rowCount() > 0) {
                    $retrived_data = $result->fetchAll();
                    setcookie('ORDERS', json_encode($retrived_data), time () + 86000, "/", "", false);
                }
            }

            if (is_array($retrived_data) && count($retrived_data) > 0) {
                foreach ($retrived_data as $order) {
                    $order_str .= "<tr>";
                        $order_str .= "<td>" . htmlspecialchars($order['customer_id']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['product_name']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['unit_price']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['quantity']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['total_price']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['order_date']) . "</td>";
                        $order_str .= "<td>" . htmlspecialchars($order['customer_address']) . "</td>";
                    $order_str .= "</tr>";
                }

            }else {
                echo("No Order Records Where Found!");
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
    <h1>Customer ID: <?= $customer_id ?></h1>
    <table>
        <thead>
            <th>S/N</th>
            <th>Product Name</th>
            <th>Order Unt Price</th>
            <th>Order Quantity</th>
            <th>Order Total Price</th>
            <th>Order date & time</th>
            <th>Customer</th>
        </thead>
        <tbody>
            <?= $order_str; ?>
        </tbody>
    </table>
</body>
</html>