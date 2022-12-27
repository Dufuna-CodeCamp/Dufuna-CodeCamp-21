<?php

require_once 'pdoconfig.php';

try{
    $pdo_conn = new PDO("mysql:host=$host;dbname=$dbname", "$username", "$password");

    $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to '$dbname' at '$host' successfully. Host info: " . $pdo_conn->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")). "<br>";

}catch(PDOException $e){
    die("ERROR: Could not connect to the database '$dbname' : <br/>". $e->getMessage());
}


// // create orders table
// try {
//     $sql = "CREATE TABLE orders (
//         id INT NOT NULL AUTO_INCREMENT,
//         user_id INT NOT NULL,
//         product_name VARCHAR(100) NOT NULL,
//         unit_price DECIMAL(10,2) NOT NULL,
//         quantity INT NOT NULL,
//         created_at DATETIME,
//         location_address VARCHAR(255) NOT NULL,
//         PRIMARY KEY (id),
//         FOREIGN KEY (user_id) REFERENCES users (id)
//     )";

//     $pdo_conn->exec($sql);
//     echo "Order Table Created Successfully.";
// } catch (PDOException $e) {
//     die("Error: Could not execute $sql. " . $e->getMessage());
// }

// unset($pdo_conn);


// // insert data into the user table
// try{
//     $sql = "INSERT INTO orders (user_id, product_name, unit_price, quantity, created_at, location_address)
//         VALUES (3, 'Laptop Screen', 700.00, 2, now(), 'No.3 Onyemaechi Street Agbani Enugu Enugu State'),
//             (3, 'Fan Belt', 3000.00, 1, now(), 'No.5 Chukwuma Street Ifite Awka Anambra State'),
//             -- (2, 'Laptop bag', 3000.00, 1, now(), 'No.8 Godswill Avenue Nkwelle Nkwelle Anambra State'),
//             (3, 'Automatic Door', 3000.00, 1, now(), 'No.2 Mgbafor Street Nsukka Awka Anambra State'),
//             (3, 'Electric Fan', 4500.00, 1, now(), 'No.20 Umuomaku Avenue Agu Awka Anambra State'),
//             (3, 'Hand bag', 5000.00, 1, now(), 'No.10 Alfred Street Amikwo Awka Anambra State')";

//         $pdo_conn->exec($sql);
//         echo "Records inserted successfully.";
// }catch (PDOException $e){
//     die("Error: Could not execute $sql." . $e->getMessage());
// }

// unset($pdo_conn);