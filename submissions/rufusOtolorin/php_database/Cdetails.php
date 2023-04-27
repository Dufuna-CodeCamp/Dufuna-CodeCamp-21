<?php

    setcookie('DataBase',' $id', time()+ 3600, '/');

  if(!isset($_COOKIE['DataBase'])){
    echo (Database);
  }



  require_once('config.php');


    try{
        // Create prepared statement
        $sql = 'SELECT * FROM customers';
        $result = $pdo->query($sql);
        
    } catch (PDOException $error){
        die('ERROR: Could not execute $sql. ' . $error->getMessage());
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
            text-align: center;
        }

        td{
            width: 10em;
        }

        a{
            text-decoration: none;
            color: #000;
        }

        input{
            border: unset;
            background-color: #fff;
            text-align: center;
            padding: 0;
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
                <th>More Details</th>
            </thead>

            <tbody>
                <?php while ($row = $result->fetch()): ?>
                    <form action="customers.php" method="post">
                        <tr>
                            <td><input type='text' name='id' value='<?= $row['id'] ?>' /></td>
                            <td><?= $row['full_name'] ?></td>
                            <td><?= $row['email_address'] ?></td>
                            <td><?= $row['created_at'] ?></td>
                            <td><?= $row['actions'] ?></td>
                            <td><input type="submit" class="submit" value="View <?= $row['full_name'] ?>'s order"></input></td>
                        </tr>
                    </form>
                <?php endwhile; ?>
            </tbody>
        </table>
    <?php endif ?>
</body>
</html>

