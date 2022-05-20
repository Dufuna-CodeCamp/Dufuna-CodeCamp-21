<?php

function converter($num){
    
    //we define some useful constants
    define('pound_conversion_unit', 2.20462262185);
    define('yard_conversion_unit', 1.09361);
    define('fahnrenheiht_conversion_unit',9/5);


    //perfom the computation
    $pound = ($num * pound_conversion_unit);
    $yard = ($num * yard_conversion_unit);
    $fahrenheit = ($num * (fahnrenheiht_conversion_unit)) + 32;

    //print values
    echo ("{$num}Kilos to pounds is ". $pound ." lbs<br/>");
    echo ("{$num}meters to yards is ". $yard ." yards<br/>");
    echo ("{$num}degrees to fahrenheit is ". $fahrenheit ." F°<br/>");
}

//call the function with argument 10
converter(10);

?>