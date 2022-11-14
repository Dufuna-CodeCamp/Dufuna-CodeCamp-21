<?php

require_once('connection.php');

try{
    $sql = "
        SELECT * FROM customerDetails";
    $result = $pdo->query($sql);
    if($result->rowCount() > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>s/n</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Actions</th>";
            echo "</tr>";
            while($row = $result->fetch()){
            $sn = $row['ID'];
            $fullname = $row['Full_Name'];
            $email = $row['Email_Address'];
            $created = $row['Created_At'];
            setcookie('s_n', json_encode($sn),time()+3600);
            setcookie('fullname', json_encode($fullname), time()+3600);
            setcookie('emailaddress', json_encode($email), time()+3600);
            setcookie('createdat', json_encode($created), time()+3600);

            echo "<tr>";
                echo "<td>" . $row['ID'] . "</td>";
                echo "<td>" . $row['Full_Name'] . "</td>";
                echo "<td>" . $row['Email_Address'] . "</td>";
                echo "<td>" . $row['Created_At'] . "</td>";
        

                echo "<td> <button><a href=\"productDetails.php?userid={$row['ID']}\">View</a> </button></td>";
        echo "</tr>";
    }
    echo "</table>";

    unset($result);
    }else{
        echo "Error: No records found for query $sql";
    }

}catch(PDOException $e){
    die("Could not execute $sql \n". $e->getMessage());
}
unset($pdo); 
?>