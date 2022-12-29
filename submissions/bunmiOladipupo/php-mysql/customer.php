<?php
    if (isset($_cookies['sn'])) {
        try{
            $sql = "SELECT * FROM customers";
            $data = $pdo->query($sql);
            if($data->rowCount() > 0){
                    echo "<table>";
                    echo "<tr>";
                        echo "<th>S/N</th>";
                        echo "<th>Full Name</th>";
                        echo "<th>Email Address</th>";
                        echo "<th>Created At</th>";
                        echo "<th>Actions</th>";
                    echo "</tr>";
                while($row = $data->fetch()){
                $sn = $row['customer_id'];
                $username = $row['customer_name'];
                $email = $row['customer_email'];
                $created = $row['date'];
                setcookie('sn', json_encode($sn),time()+(3600 * 24));
                setcookie('fullname', json_encode($username), time()+(3600 * 24));
                setcookie('email', json_encode($email), time()+(3600 * 24));
                setcookie('created', json_encode($created), time()+(3600 * 24));
    
                echo "<tr>";
                        echo "<td>" . $row['customer_id'] . "</td>";
                        echo "<td>" . $row['customer_name'] . "</td>";
                        echo "<td>" . $row['customer_email'] . "</td>";
                        echo "<td>" . $row['date'] . "</td>";
                        echo "<td> <a href='products.php?id='".$row['customer_id']."'><button>View</button></a> </td>";
                    echo "</tr>";
                }
                echo "</table>";
    
                unset($data);
            
            }else{
                echo "No records matching your query were found.";
            }
        }catch(PDOException $e){
            die("ERROR: Could not execute $sql." . $e->getMessage());
        }
    
    }else{
        try{
            $pdo = new PDO("mysql:host=localhost;dbname=foodbag", "root", "");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            die("ERROR: Could not connect. " . $e->getMessage());
        }
        try{
            $sql = "SELECT * FROM customers";
            $data = $pdo->query($sql);
            if($data->rowCount() > 0){
                    echo "<table>";
                    echo "<tr>";
                        echo "<th>S/N</th>";
                        echo "<th>Full Name</th>";
                        echo "<th>Email Address</th>";
                        echo "<th>Created At</th>";
                        echo "<th>Actions</th>";
                    echo "</tr>";
                while($row = $data->fetch()){
                $sn = $row['customer_id'];
                $username = $row['customer_name'];
                $email = $row['customer_email'];
                $created = $row['date'];
                setcookie('sn', json_encode($sn),time()+(3600 * 24));
                setcookie('fullname', json_encode($username), time()+(3600 * 24));
                setcookie('email', json_encode($email), time()+(3600 * 24));
                setcookie('created', json_encode($created), time()+(3600 * 24));
    
                echo "<tr>";
                        echo "<td>" . $row['customer_id'] . "</td>";
                        echo "<td>" . $row['customer_name'] . "</td>";
                        echo "<td>" . $row['customer_email'] . "</td>";
                        echo "<td>" . $row['date'] . "</td>";
                        echo "<td> <a href='products.php?id='".$row['customer_id']."'><button>View</button></a> </td>";
                    echo "</tr>";
                }
                echo "</table>";
    
                unset($data);
            
            }else{
                echo "No records matching your query were found.";
            }
        }catch(PDOException $e){
            die("ERROR: Could not execute $sql." . $e->getMessage());
        }
        
        

        
        unset($pdo);
    }

?>