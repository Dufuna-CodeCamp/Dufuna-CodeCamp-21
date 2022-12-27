<?php

require_once("connection.php");

echo "<h1>LIST OF USERS</h1>";

if(!isset($_COOKIE["user0id"])){
    try{
        $sql = "SELECT * FROM users";
        $result = $pdo->query($sql);
    
        if($result->rowCount() > 0){
            $users = [];
            $ind = 0; 
            while($row = $result->fetch()){
                $userTag = "user".$ind;
                $user = [
                    $row['id'],
                    $row['full_name'],
                    $row['email'],
                    $row['created_at']
                ];
    
                setcookie($userTag."id", $row['id']);
                setcookie($userTag."name", $row['full_name']);
                setcookie($userTag."email", $row['email']);
                setcookie($userTag."date", $row['created_at']);
    
                $ind+=1;
            }
            unset($result);
    
        }else{
            echo "no records found";
        }
    }catch(PDOException $e){
        die("Error: ". $e->getMessage());
    }
    
    unset($pdo);
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
                echo "<th>FULL NAME</th>";
                echo "<th>EMAIL ADDRESS</th>";
                echo "<th>CREATED AT</th>";
                echo "<th>ACTIONS</th>";
            echo "</tr>";

            $count = sizeof($_COOKIE);
            $c = 0;
        for($i = 1; $i <= 5; $i++){
            $userTag = "user".$c;
            $currentUser = $_COOKIE[$userTag."id"];
            echo "<p>$currentUser</p>";
            echo "<tr>";
                echo "<td>" . $_COOKIE[$userTag."id"] . "</td>";
                echo "<td>" . $_COOKIE[$userTag. "name"] . "</td>";
                echo "<td>" . $_COOKIE[$userTag. "email"] . "</td>";
                echo "<td>" . $_COOKIE[$userTag. "date"] . "</td>";
                echo "<td>
                        <form action = 'index1.php' method= 'post'>
                            <input type = 'text' hidden name = 'star' value = '$currentUser'/>
                            <button type = 'submit'>VIEW</button>
                        </form>
                    </td>";
            echo "</tr>";

            $c += 1;
        }
            

        echo "</table>";
    ?>
</body>
</html>
