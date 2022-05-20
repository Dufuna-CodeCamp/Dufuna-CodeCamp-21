<?php

function unitConveter($number){
    $pound = 2.205;
    $yard = 1.094;
    $fahrenheit = 1.8;


    $poundValue = $number*$pound;
    $yardValue = $number*$yard;
    $fahrenheitValue = 32 + ($number*$fahrenheit);

    echo "$poundValue, $yardValue, $fahrenheitValue";
}

// unitConveter(34);