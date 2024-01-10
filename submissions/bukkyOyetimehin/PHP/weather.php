<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Weather Conditions</title>
</head>

<body>
    <h2>How's the weather today?</h2>
    <label>
        <h3>Enter today's temperature</h3>
    </label>
    <form method="POST">
        <input type="number" step="any" name="temperature"><b>°C</b><br>
        <input type="submit"><br><br>
    </form>
</body>

</html>


<?php

$temperature = $_POST["temperature"];

if ($temperature <= 20) {
    echo "It is freezing today!";
} elseif ($temperature > 20 && $temperature < 30) {
    echo "The weather is just perfect!";
} elseif ($temperature >= 30 && $temperature < 40) {
    echo "It's so hot today!";
} elseif ($temperature >= 40) {
    echo "Am I in the Sahara Desert?";
} else {
    echo "Please enter the day's temperature";
}

?>