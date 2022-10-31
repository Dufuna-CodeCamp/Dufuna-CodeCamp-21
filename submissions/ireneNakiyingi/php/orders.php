<?php
require_once('connection.php');
try{
    $customer_id= isset($_GET['customer_order']) ? (int)$_GET['customer_order']:false;
    $sql = "SELECT S_N,Product_Name,Unit_Price,Quantity,Total_Price,create_date,Address FROM order_lists WHERE S_N = $customer_id";#also works but not only one row #fixed works
    $pdoresult = $connect->query($sql);

    $orders_data = array();
    if (isset($_COOKIE["CUSTOMERS_ORDERS"])){
        $order_data= json_decode ($_COOKIE["CUSTOMERS_ORDERS"], true);
        $customer = false;
        foreach ($order_data as $data){
            if ($customer_id === $data['S_N']){
                $customer= true;
                $orders_data= $order_data;
            };
            if ($pdoresult -> rowCount()>0){
                $orders_data= $pdoresult->fetchAll();
                setcookie("CUSTOMERS_ORDERS", json_encode($orders_data), time()+ 8600, "/", "", false);
                echo "cookie set";  
            }
        };
        };
    if (!empty($pdoresult)){
        echo " <h2> Customer Order Details: $customer_id</h2>";
            echo '<table>';
                echo '<tr>';
                    echo '<th>S_N</th>';
                    echo '<th>Product Name</th>';
                    echo '<th>Order Unit Price</th>';
                    echo '<th>Order Quantity</th>';
                    echo '<th>Order Total Price</th>';
                    echo '<th>Created Date</th>';
                    echo '<th>Customer Location</th>';
                echo '</tr>';
            foreach($pdoresult as $rows){
                echo '<tr>';
                    echo "<td>" . $rows['S_N'] . "</td>";
                    echo "<td>" . $rows['Product_Name'] . "</td>";
                    echo "<td>" . $rows['Unit_Price'] . "</td>";
                    echo "<td>" . $rows['Quantity'] . "</td>";
                    echo "<td>" . $rows['Total_Price'] . "</td>";
                    echo "<td>" . $rows['create_date'] . "</td>";
                    echo "<td>" . $rows['Address'] . "</td>";   
                echo '</tr>';
            }
            echo '</table>';
    }else {
        echo "No order results";
    }  
} catch (PDOException $e){
    echo $e-> getMessage();
}
unset($connect);
?>