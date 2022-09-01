<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=Foodbag", "dbuser", "1234");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}

try{
    $sql = "SELECT * FROM customer";
    $result = $pdo->query($sql);
     if($result->rowCount() > 0){
            echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Actions</th>";
            echo "</tr>";
        while($row = $result->fetch()){
        $sn = $row['sn'];
        $username = $row['fullname'];
        $email = $row['emailaddress'];
        $created = $row['createdat'];
        setcookie('cookie_sn', json_encode($sn),time()+3600);
        setcookie('fullname', json_encode($fullname), time()+3600);
        setcookie('email', json_encode($mail), time()+3600);
        setcookie('craeted', json_encode($created), time()+3600);

          echo "<tr>";
                echo "<td>" . $row['sn'] . "</td>";
                echo "<td>" . $row['fullname'] . "</td>";
                echo "<td>" . $row['emailaddress'] . "</td>";
                echo "<td>" . $row['createdate'] . "</td>";
                echo "<td> <a href=\"product.php?user_id={$row['sn']}\">View</a> </td>";
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