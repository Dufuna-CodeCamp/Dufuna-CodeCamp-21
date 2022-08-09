<?php

//  CONVERSION FROM KILOGRAM TO POUNDS

//  Function to convert by passing in a specific value 
function calculatePounds(float $kilos) {
    echo $kilos . " Kilos = " . ($kilos * 2.20462) . " Pounds.</h1> <br/>";
}

calculatePounds(6);




//  CONVERSION FROM METER TO YARD

//  Function to convert by passing in a specific value 
function calculateYards(float $meters) {
    echo $meters . " Meters = " . ($meters * 1.094) . " Yards. <br/>";
}

calculateYards(5);
 



//  CONVERSION FROM CELCIUS TO FARENHEIT 

//  Function to convert by passing in a specific value 
function calculateFarenheit(float $celsius) {
        echo  $celsius . " degrees Celsius = " . (($celsius * 9/5) + 32) . " degrees Farenheit. <br/>" ;
}

calculateFarenheit(4);



