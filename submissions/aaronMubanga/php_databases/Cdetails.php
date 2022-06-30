<?php
    setcookie('DataBase', 'FoodBag', time()+ 3600, '/');
  include ('connectDB.php');

  if(!isset($_COOKIE['DataBase'])){
    echo 'Database';
  }


    try{
        // Create prepared statement
        $sql = 'SELECT * FROM customers';
        $result = $pdo->query($sql);
        
    } catch (PDOException $e){
        die('ERROR: Could not execute $sql. ' . $e->getMessage());
    }  

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,td,tr,th {
            border-collapse: collapse;
            border: 1px solid #000;
        }

        td{
            width: 10em;
        }


    </style>
</head>

<body>
    <?php if ($result->rowcount() > 0): ?>
        <table>
            <thead>
                <th>N/S</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Created At</th>
                <th>Action</th>
            </thead>

            <tbody>
                <?php while ($row = $result->fetch()): ?>
                    <tr>
                        <td><?= $row['id'] ?></td>
                        <td><?= $row['full_name'] ?></td>
                        <td><?= $row['email_address'] ?></td>
                        <td><?= $row['created_at'] ?></td>
                        <td><?= $row['actions'] ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    <?php endif ?>
</body>
</html>