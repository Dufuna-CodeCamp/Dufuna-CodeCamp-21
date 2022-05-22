<?php

require_once('connection.php');

$id = intval($_REQUEST['star']);



try{
    $sql = "SELECT * FROM orders WHERE customer_id = $id";

    $result = $pdo->query($sql);

    if($result->rowCount() > 0){
        $orderId = 0;
        while($row = $result->fetch()){
            $orderTag = 'order'.$orderId;

            setcookie($orderTag.'id', $row['id']);
            setcookie($orderTag.'pname', $row['product_name']);
            setcookie($orderTag.'oprice', $row['price']);
            setcookie($orderTag.'quant', $row['quantity']);
            setcookie($orderTag.'tprice', $row['price']*$row['quantity']);
            setcookie($orderTag.'date', $row['created_at']);
            setcookie($orderTag.'loc', $row['address']);


            $orderId++;

        }
        unset($result);
        // var_dump($_COOKIE);
    }else{
        echo "customer has no orders";
    }
}catch(PDOException $e){
    die("ERROR: ". $e->getMessage());
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Order Unit Price</th>";
                echo "<th>Order Quantity</th>";
                echo "<th>Order Total Price</th>";
                echo "<th>Created Date</th>";
                echo "<th>Customer Location</th>";
            echo "</tr>";  

        for ($i =0; $i < $orderId; $i++){
            $orderBase = "order".$i;
            $orderNum = $i + 1;
            echo "<tr>";
                echo "<td>" . $orderNum . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "pname"] . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "oprice"] . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "quant"] . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "tprice"] . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "date"] . "</td>";
                echo "<td>" . $_COOKIE[$orderBase. "loc"] . "</td>";
                echo "<td>
                        <button type = 'submit'>VIEW</button>
                    </td>";
            echo "</tr>";

        }
        
        

        // echo "</table>";

        // $count = sizeof($_COOKIE);

        
        // $keys = array_keys($_COOKIE);

        // var_dump($keys);

        // echo "$orderId";

    ?>
</body>
</html>