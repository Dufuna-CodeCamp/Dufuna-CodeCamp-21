<?php

function unitConveter($number){
    $yard = 1.094;
    $pound = 2.205;
    $fahrenheit = 1.8;

    $yardValue = $number*$yard;
    $poundValue = $number*$pound;
    $fahrenheitValue = 32 + ($number*$fahrenheit);

    echo ("Yard: $yardValue, ");
    echo ("Pound: $poundValue, ");
    echo ("Fahrenheit: $fahrenheitValue ");
    // echo ( phpinfo());
}

// unitConveter(20);