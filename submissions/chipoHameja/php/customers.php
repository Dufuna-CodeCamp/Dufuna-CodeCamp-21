<?php
    require_once("connection.php");
    
    $customers = "";

    if (!isset($_COOKIE["customers"])) {
        //echo("Cookie not set");
        $sql = "SELECT * FROM customers";
        $customers = mysqli_query($mysql, $sql);
    }
    
    else {
        //echo("Cookie set");
        $customers = json_decode($_COOKIE["customers"], true);
    }
    $customers_array = array();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">S/N</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php

            if(!isset($_COOKIE["customers"])){
                if (mysqli_num_rows($customers) > 0) {
                    $count = 1;
                    while ($customer = mysqli_fetch_assoc($customers)) {
                        $customer_array = array($customer['id'], $customer['full_name'], $customer['email_address'], $customer['created_at']);
                        echo("
                            <tr>
                                <th scope='row'>$count</th>
                                <td>$customer[full_name]</td>
                                <td>$customer[email_address]</td>
                                <td>$customer[created_at]</td>
                                <td><a href='#' class='btn btn-primary'>VIEW</a></td>
                            </tr>
                        ");
                        
                        array_push($customers_array, $customer_array);
                        unset($customer_array);
                        
                        $count++;
                    }

                    //print_r($customers_array);
                    setcookie("customers", json_encode($customers_array), time() + 3600);
                }
            }

            else {
                if(count($customers) > 0) {
                    $count = 1;
                    for ($row=0; $row < count($customers); $row++) { 
                        for ($col=0; $col < 1; $col++) { 
                            echo("
                                <tr>
                                    <th scope='row'>$count</th>
                                    <td>" . $customers[$row][1] . "</td>
                                    <td>" .$customers[$row][2]. "</td>
                                    <td>" .$customers[$row][3]. "</td>
                                    <td><a href='#' class='btn btn-primary'>VIEW</a></td>
                                </tr>
                            ");
                        }
                        $count++;
                    }
                }
            }
            ?>
        </tbody>
    </table>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>