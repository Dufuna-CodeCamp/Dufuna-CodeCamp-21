<?php

require_once('dbconnect.php');
$id = intval($_REQUEST['star']);
echo("<h1 style='text-align: center; margin-top: 20px; margin-bottom: 0;'>Order Details for <em>Happiness Mmadu</em></h1>");
echo("<p style='text-align: center; margin-bottom: 40px; margin-top: 0;'> (Email: happy@gmail.com, Id No.: ".$id. ") </p>");
try{
    $sql = "SELECT * FROM orders WHERE user_id = $id";
    
    $result = $pdo_conn->query($sql);
    
    if($result->rowCount() > 0){
        $orderId = 0;
        
        while($row = $result->fetch()){

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
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S/N</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Name</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order Unit Price</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order Quantity</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order Total Price</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created Date</th>";
                    echo "<th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer Location</th>";
                    // echo "<th>&nbsp;&nbsp;&nbsp;Action<br><br></th>";
                echo "</tr>";  

            for ($i =0; $i < $orderId; $i++){
                $orderBase = "order".$i;
                $orderNum = $i + 1;

                echo "<tr>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $orderNum . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "pname"] . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "oprice"] . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "quant"] . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "tprice"] . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "date"] . "</td>";
                    echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . $_COOKIE[$orderBase. "loc"] . "</td>";
                    // echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    //         <button type = 'submit'>VIEW</button>
                    //     </td>";
                echo "</tr>";

            }
            
    ?>
</body>
</html>