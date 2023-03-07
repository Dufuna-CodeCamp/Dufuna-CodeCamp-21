<?php
try{
    $pdo = new PDO("mysql:host=localhost;dbname=publisher", "root", "mysql");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected Successfully. Host info: ".
    $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")). "<br>";

}catch(PDOException $e){
    die("ERROR: Could not connect. ". $e->getMessage());
}

try{
    $sql = "CREATE DATABASE publisher";
    $pdo->exec($sql);
    echo "Database created successfully";

}catch(PDOException $e){
    die("ERROR: Could not execute $sql. ". $e->getMessage());
}

try{
    $sql = "CREATE TABLE admins(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        email_address VARCHAR(200) NOT NULL UNIQUE,
        created_at DATETIME
        )";

    $pdo->exec($sql);
    echo "Table created successfully";
}catch(PDOException $e){
    die("ERROR: Could not execute $sql. ". $e->getMessage());
}

try{
    $sql = "CREATE TABLE articles(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        status VARCHAR(70) DEFAULT 'unpublished' NOT NULL,
        created_by INT NOT NULL,
        created_at DATETIME,
        FOREIGN KEY (created_by) REFERENCES admins (id)

    )";

    $pdo->exec($sql);
    echo "Table created successfully";
}catch(PDOException $e){
    die("ERROR: Could not execute $sql. ". $e->getMessage());
}

try{
    $sql = "INSERT INTO admins (name, email_address, created_at) VALUES
    ('Bolu Alfred', 'Bolu@mail.com', now()), 
    ('Chioma Crowther', 'chianime@mail.com', now()),
    ('Stan Mgbede', 'stan@mail.com', now()),
    ('Mike Ruffalo', 'mike@mail.com', now()), 
    ('John Doe', 'jon@gmail.com', now())";

    $pdo->exec($sql);
    echo "Data inserted successfully";

}catch(PDOException $e){
    die("ERROR: Could not execute $sql." . $e->getMessage());
}

try{
    $sql = "INSERT INTO articles (title, description,created_by, created_at) VALUES
    ('Lost in the woods', 'article of boys lost', 1,now()), 
    ('Starry Nights', 'Article on astronomer stories',2, now())";

    $pdo->exec($sql);
    echo "Data inserted successfully";

}catch(PDOException $e){
    die("ERROR: Could not execute $sql." . $e->getMessage());
}

unset($pdo);