<?php
    $mysql = mysqli_connect("localhost", "root", "", "foodbag");

    if ($mysql === false) {
        die("ERROR: Could not connect to database: " . mysqli_connect_error($mysql));
    }
?>