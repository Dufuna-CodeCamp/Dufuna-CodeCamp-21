<?php
$id = $_GET['user_id'];

try{
    $pdo = new PDO("mysql:host=localhost;dbname=Foodbag", "dbuser", "1234");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}

try{
    $sql = "SELECT products.sn, products.productName, products.orderUnitPrice, products.orderQuantity, products.orderTotalPrice, products.createdDate, products.customerLocation
    FROM products INNER JOIN customer
    ON  customer.sn = products.customerSn AND products.customerSn=$id";
    $result = $pdo->query($sql);
     if($result->rowCount() > 0){
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
        while($row = $result->fetch()){
            $sn = $row['sn'];
            $productName = $row['productName'];
            $orderUnitPrice = $row['orderUnitPrice'];
            $orderQuantity= $row['orderQuantity'];
            $orderTotalPrice = $row['orderTotalPrice'];
            $created = $row['createdDate'];
            $customerLocation = $row['customerLocation'];
            setcookie('cookie_sn', json_encode($sn),time()+3600);
            setcookie('productname', json_encode($productName), time()+3600);
            setcookie('orderUnitPrice', json_encode($orderUnitPrice), time()+3600);
            setcookie('orderQuantity', json_encode($orderQuantity), time()+3600);
            setcookie('orderTotalPrice', json_encode($orderTotalPrice), time()+3600);
            setcookie('created', json_encode($created), time()+3600);
            setcookie('location', json_encode($customerLocation), time()+3600);

          echo "<tr>";
                echo "<td>" . $row['sn'] . "</td>";
                echo "<td>" . $row['productName'] . "</td>";
                echo "<td>" . $row['orderUnitPrice'] . "</td>";
                echo "<td>" . $row['orderQuantity'] . "</td>";
                echo "<td>" . $row['orderTotalPrice'] . "</td>";
                echo "<td>" . $row['createdDate'] . "</td>";
                echo "<td>" . $row['customerLocation'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";

        unset($result);
    
    }else{
        echo "No records matching your query were found.";
    }
}catch(PDOException $e){
    die("ERROR: Could not execute $sql." . $e->getMessage());
}

unset($pdo);
?>