<?php


$value = $_POST['number'];  

$kilo =  5.20462262185;

function Convert() {

    $number = $_POST['number'];
    
    $yard = 1.09361;
    $pound = 2.20462262185;

    echo($number." Kilos to pounds = ".$number * $pound." lb");

    echo"<br/>";
    echo"<br/>";

    echo($number." Meters to yards = ".$yard * $number." yards");

    echo"<br/>";
    echo"<br/>";

    echo($number." Celcius to fahrenheit = ");
    echo(($number * 9/5) + 32 ." F");

    echo"<br/>";
    echo"<br/>";

}
Convert();
?>