<?php
require_once("connection.php");

try{
    $sql = "SELECT SN, Full_Name, Email_Address, Created_At FROM customer ";
    $pdoresult = $connect->query($sql);

    
    $customer_data = array();
    
    if (isset($_COOKIE["CUSTOMERS"])){
        $customer_data= json_decode ($_COOKIE["CUSTOMERS"], true);

    } else {
       
        if ($pdoresult -> rowCount()>0){
            $customer_data= $pdoresult->fetchAll();
            setcookie("CUSTOMERS", json_encode($customer_data), time()+ 8600, "/", "", false);
            
        }
    };
    /*
    if (is_array($customer_data) && count ($customer_data)>0){
        echo " <h2> Customer Details </h2>";
            echo '<table>';
                echo '<tr>';
                    echo '<th>S/N</th>';
                    echo '<th>Full Name</th>';
                    echo '<th>Email Address</th>';
                    echo '<th>Created At</th>';
                    echo '<th>Action</th>';
                echo '</tr>';
        foreach($customer_data as $person ){
            echo "<tr>";
            echo "<td>" . $person['SN'] . "</td>";
            echo "<td>" . $person['Full_Name'] . "</td>";
            echo  "<td>" . $person['Email_Address'] . "</td>";
            echo"<td>" . $person['Created_At'] . "</td>";
            echo "<td> <button>View </button> </td>";
            echo "</tr>";
        }
    } else{
        echo "No content found";
    }*/
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
                    echo "<td> <button>View </button></td>";
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
