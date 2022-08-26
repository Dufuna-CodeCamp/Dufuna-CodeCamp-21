<?php

function kilosToPounds($param){
    echo "kilos in pounds is: " . $param * 2.2046 . "<br>";
}

function metersToYards($param){
    echo "meters in yards is: " . $param * 1.0936 . "<br>";
}

function celsiusToFahrenheit($param){
    echo "celcius to fahrenheit is: " . 9/5 * $param + 32 . "<br>";
}


kilosToPounds(40);
metersToYards(40);
celsiusToFahrenheit(32);