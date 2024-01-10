<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit Conversions Using PHP functions</title>
</head>

<body>
    <h2>Kilos(kg)_to_Pounds(lb)_Conversion</h2>
    <label>enter kilos value</label>
    <form method="POST">
        <input type="number" step="any" name="kilos"> <br>
        <input type="submit" name="submit" value=CONVERT><br>
    </form>
    <h2>Metres(m)_to_Yards(yd)_Conversion</h2>
    <label>enter metres value</label>
    <form method="POST">
        <input type="number" step="any" name="metres"><br>
        <input type="submit" name="submit" value=CONVERT><br>
    </form>
    <h2>Celsius(°C)_to_Fahrenheit(°F)_Conversion</h2>
    <label>enter Celsius value</label>
    <form method="POST">
        <input type="number" step="any" name="celsius"><br>
        <input type="submit" name="submit" value=CONVERT><br>
    </form><br>
</body>

</html>


<?php

//getting the values of the fields
$kilos = $_POST["kilos"];
$metres = $_POST["metres"];
$celsius = $_POST["celsius"];

//DEFINING THE FUNCTIONS

//kilos(kg)_to_pounds(lb)_conversion
//formula; pounds = kilos *2.205
if ($_POST["kilos"]) {
    function kilos_to_Pounds_Conversion($kilos)
    {
        $pounds = ($kilos * 2.205);
        echo "$kilos kg to pounds=" . " "  . " " . " $pounds" . "lb <br>";
    }
    kilos_to_Pounds_Conversion($kilos);
}

// metres(m)_to_yards(lb)_conversion
// formula; metres(m) = yards * 1.094
if ($_POST["metres"]) {
    function metres_to_Yards_Conversion($metres)
    {
        $yards = ($metres * 1.094);
        echo "$metres m to yards =" . " "  . " " . "$yards" . "yds <br/>";
    }
    metres_to_Yards_Conversion($metres);
}

//Celsius(°C)_to_Fahrenheit(°F)_conversion
//formula; (Celsius × 9/5) + 32 
if ($_POST["celsius"]) {

    function celsius_to_Fahrenheit_Conversion($celsius)
    {
        $fahrenheit = ($celsius * 1.8) + 32;
        echo "$celsius °C to fahrenheit =" . " "  . " " . "$fahrenheit" . "°F";
    }
    celsius_to_Fahrenheit_Conversion($celsius);
} else {
    echo " ";
}
?>