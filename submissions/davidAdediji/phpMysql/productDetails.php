<?php
require_once('connection.php');
$id = $_GET['userid'];
echo $id;

// try{
//     $sql = "USE foodBag;
//     CREATE TABLE productDetail (
//             Customer_ID INT NOT NULL PRIMARY KEY,
//             Product_Name VARCHAR(100) NOT NULL,
//             Order_Unit_Price INT NOT NULL,
//             Order_Quantity_Price INT NOT NULL,
//             Order_Total_Price INT NOT NULL,
//             Created_Date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//             Customer_Location VARCHAR(100) NOT NULL,
//             FOREIGN KEY (Customer_ID) REFERENCES customerDetails(ID)
//         )";

//         $pdo->exec($sql);
//         echo "table created successfully";
// }catch(PDOException $e){
//     die("Error:could not create table" . $e->getMessage());
// }

try{
    $sql = "USE foodBag;
    SELECT productDetail.Customer_ID, productDetail.Product_Name, productDetail.Order_Unit_Price, productDetail.Order_Quantity_Price, productDetail.Order_Total_Price, productDetail.Created_Date, productDetail.Customer_Location
    FROM productDetail INNER JOIN customerDetails
    ON  customerDetails.ID = productDetail.Customer_ID AND productDetail.Customer_ID=$id";
    

    $result = $pdo->query($sql);

    $row = $result->fetchAll();
    print_r($row);
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
            $sn = $row['Customer_ID'];
            $productName = $row['Product_Name'];
            $orderUnitPrice = $row['Order_Unit_Price'];
            $orderQuantity= $row['Order_Quantity_Price'];
            $orderTotalPrice = $row['Order_Total_Price'];
            $created = $row['Created_Date'];
            $customerLocation = $row['Customer_Location'];
            setcookie('cookie_id', json_encode($sn),time()+3600);
            setcookie('productname', json_encode($productName), time()+3600);
            setcookie('orderUnitPrice', json_encode($orderUnitPrice), time()+3600);
            setcookie('orderQuantity', json_encode($orderQuantity), time()+3600);
            setcookie('orderTotalPrice', json_encode($orderTotalPrice), time()+3600);
            setcookie('created', json_encode($created), time()+3600);
            setcookie('location', json_encode($customerLocation), time()+3600);

          echo "<tr>";
                echo "<td>" . $row['Customer_ID'] . "</td>";
                echo "<td>" . $row['Product_Name'] . "</td>";
                echo "<td>" . $row['Order_Unit_Price'] . "</td>";
                echo "<td>" . $row['Order_Quantity_Price'] . "</td>";
                echo "<td>" . $row['Order_Total_Price'] . "</td>";
                echo "<td>" . $row['Created_Date'] . "</td>";
                echo "<td>" . $row['Customer_Location'] . "</td>";
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