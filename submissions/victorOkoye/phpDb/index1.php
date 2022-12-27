<?php

require_once('dbconnect.php');
$id = intval($_REQUEST['star']);
echo($id);

try{
    $sql = "SELECT * FROM orders WHERE user_id = $id";
    // echo ($sql);

    $result = $pdo_conn->query($sql);
    
    
    if($result->rowCount() > 0){
        $orderId = 0;
        // echo $orderId;
        while($row = $result->fetch()){
            // var_dump($row['location_address']);
            $orderTag = 'order'.$orderId;
            setcookie($orderTag.'id', $row['id']);
            setcookie($orderTag.'pname', $row['product_name']);
            setcookie($orderTag.'oprice', $row['unit_price']);
            setcookie($orderTag.'quant', $row['quantity']);
            setcookie($orderTag.'tprice', $row['unit_price']*$row['quantity']);
            setcookie($orderTag.'date', $row['created_at']);
            setcookie($orderTag.'loc', $row['location_address']);


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
                echo "<th>&nbsp;Order Unit Price</th>";
                echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;Order Quantity</th>";
                echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;Order Total Price</th>";
                echo "<th>&nbsp;Created Date</th>";
                echo "<th>&nbsp;Customer Location</th>";
                echo "<th>&nbsp;&nbsp;&nbsp;Action<br><br></th>";
            echo "</tr>";  

        for ($i =0; $i < $orderId; $i++){
            $orderBase = "order".$i;
            $orderNum = $i + 1;
            // var_dump($_COOKIE);
            echo "<tr>";
                echo "<td>&nbsp;&nbsp;&nbsp;" . $orderNum . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "pname"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "oprice"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "quant"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "tprice"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "date"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "loc"] . "</td>";
                echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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