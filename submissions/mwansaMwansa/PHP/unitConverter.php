<?php

function kilosToPounds($kilos) {
    //kilos to pounds
    if($kilos > 1) {
        echo $kilos." kilos in pounds is ".$kilos * 2.2046."<br /><br />";
    }
}

function metersToYards($meters) {
    //meters to yards
    if($meters > 1) {
        echo $meters." meters in yards is ".$meters * 1.0936."<br /><br />";
    }
}

function celsiusToFahrenheit($celsius) {

    //celsius to fahrenheit
    if($celsius > 0) {
        echo $celsius." degrees celsius temperature in fahrenheit is ".(($celsius * 9.0/5.0) + 32.0)."<br />";
    }
}


kilosToPounds(6);
metersToYards(7);
celsiusToFahrenheit(100);

