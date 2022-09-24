<?php
require_once("connection.php");
try{
    $customer_data = array();
    $sql = "SELECT SN, Full_Name, Email_Address, Created_At FROM customers ";
    $pdoresult = $connect->query($sql);
    
    if (isset($_COOKIE["CUSTOMERS"])){
        $customer_data= json_decode ($_COOKIE["CUSTOMERS"], true);
    } else {
        if ($pdoresult -> rowCount()>0){
            $customer_data= $pdoresult->fetchAll();
            setcookie("CUSTOMERS", json_encode($customer_data), time()+ 8600, "/", "", false); 
        }
    };
    if (!empty($pdoresult)){
        echo " <h2> Customer Details </h2>";
            echo '<table>';
                echo '<tr>';
                    echo '<th>S/N</th>';
                    echo '<th>Full Name</th>';
                    echo '<th>Email Address</th>';
                    echo '<th>Created At</th>';
                    echo '<th>Action</th>';
                echo '</tr>';
            foreach($pdoresult as $rows){
                echo '<tr>';
                    echo "<td>" . $rows['SN'] . "</td>";
                    echo "<td>" . $rows['Full_Name'] . "</td>";
                    echo "<td>" . $rows['Email_Address'] . "</td>";
                    echo "<td>" . $rows['Created_At'] . "</td>";
                    echo "<td> <button><a href= 'orders.php?customer_order=" . ($rows['SN']) . "'> View </a> </button></td>";
                echo '</tr>';
            }
            echo '</table>';
    }else {
        echo "No results";
    }   
} catch (PDOException $e){
    echo $e-> getMessage();
}
unset($connect);
?>
