 <?php

//function that converts kilos,meters and celsuis to pounds, yards and fahrenheit respectively
function unitConvert($value){
    $pound = 2.205;
    $yard = 1.094;
    $fahrenheit = 1.8;


    $poundValue = $value * $pound;
    $yardValue = $value * $yard;
    $fahrenheitValue = ($value * $fahrenheit) + 32;


    echo("$value kilos is equivalent to $poundValue pounds ") ."<br>";
    echo("$value meters is equivalent to $yardValue yards ")."<br>";
    echo("$value celsuis is equal to $fahrenheitValue fahrenheit")."<br>";

}