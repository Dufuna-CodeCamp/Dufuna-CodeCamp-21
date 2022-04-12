<?php


$value = $_POST['number'];  

$kilo =  2.20462262185;

function Convert() {

    $number = $_POST['number'];
    
    $yard = 1.09361;
    $pound = 2.20462262185;

    echo($number." from kilos to pounds is: ".$number * $pound." lb");

    echo"<br/>";
    echo"<br/>";

    echo($number." from meters to yards is: ".$yard * $number." yards");

    echo"<br/>";
    echo"<br/>";

    echo($number." from celcius to fahrenheit is: ");
    echo(($number * 9/5) + 32 ." F");

    echo"<br/>";
    echo"<br/>";

}
Convert();
?>