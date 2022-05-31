<?php
require_once("connection.php");

$orders = "";
$orders_array = array();

if (isset($_REQUEST["customer_id"])) {
    if (!isset($_COOKIE["orders".$_REQUEST["customer_id"]])) {
        $sql = "SELECT * FROM orders WHERE customer_id=$_REQUEST[customer_id]";
        $orders = mysqli_query($mysql, $sql);
    }
    
    else {
        $orders = json_decode($_COOKIE["orders".$_REQUEST["customer_id"]], true);
    }
}

else {
    echo("No order");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">S/N</th>
                <th scope="col">Product Name</th>
                <th scope="col">Order Unit Price</th>
                <th scope="col">Order Quantity</th>
                <th scope="col">Order Total Price</th>
                <th scope="col">Created Date</th>
                <th scope="col">Customer Location</th>
            </tr>
        </thead>
        <tbody>
            <?php
                if (!isset($_COOKIE["orders".$_REQUEST["customer_id"]])) {
                    if (mysqli_num_rows($orders) > 0) {
                        $count = 1;

                        while ($order = mysqli_fetch_assoc($orders)) {
                            $order_array = array($order["id"], $order["product_name"], $order["order_unit_price"], $order["order_quantity"], $order["order_total_price"], $order["created_date"], $order["customer_location"]);
                            
                            echo ("
                                <tr>
                                    <th scope='row'>$count</th>
                                    <td>$order[product_name]</td>
                                    <td>$order[order_unit_price]</td>
                                    <td>$order[order_quantity]</td>
                                    <td>$order[order_total_price]</td>
                                    <td>$order[created_date]</td>
                                    <td>$order[customer_location]</td>
                                </tr>
                            ");

                            array_push($orders_array, $order_array);
                            unset($order_array);
                            $count++;
                        }

                        setcookie("orders".$_REQUEST["customer_id"], json_encode($orders_array), time() + 3600);
                    }
                }

                else {
                    if (count($orders) > 0) {
                        $count = 1;
                        for ($row=0; $row < count($orders); $row++) { 
                            for ($col=0; $col < 1; $col++) { 
                                echo("
                                    <tr>
                                        <th scope='row'>$count</th>
                                        <td>" . $orders[$row][1] . "</td>
                                        <td>" . $orders[$row][2] . "</td>
                                        <td>" . $orders[$row][3] . "</td>
                                        <td>" . $orders[$row][4] . "</td>
                                        <td>" . $orders[$row][5] . "</td>
                                        <td>" . $orders[$row][6] . "</td>
                                    </tr>
                                ");
                            }

                            $count++;
                        }
                    }
                }
            ?>
        <tbody>
    </table>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  
</body>
</html>