<?php



setcookie('customerdetails', '$id', time() +86400, './');

$id = $_POST['id'];

if(!isset($_COOKIE[customerdetails])){
    header('Location: login.php');
}

  include ('connectDB.php');


    try{
        // Create prepared statement
        // $id = $_POST['id'];
        $sql = "SELECT * FROM orders WHERE customers_id = $id";
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
            text-align: center;
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
                <th>Product Name</th>
                <th>Order Unit Price</th>
                <th>Order Quantity</th>
                <th>Order Total Price</th>
                <th>Created Date</th>
                <th>Customer Location</th>
            </thead>

            <tbody>
                <?php while ($row = $result->fetch()): ?>
                    <tr>
                        <td><?= $row['id'] ?></td>
                        <td><?= $row['product_name'] ?></td>
                        <td><?= $row['order_unit_price'] ?></td>
                        <td><?= $row['order_quantity'] ?></td>
                        <td><?= $row['order_total_price'] ?></td>
                        <td><?= $row['created_date'] ?></td>
                        <td><?= $row['customer_location'] ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    <?php endif ?>
</body>
</html>