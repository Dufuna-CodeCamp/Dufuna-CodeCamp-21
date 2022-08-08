<?php

//  CONVERSION FROM KILOGRAM TO POUNDS

//  Function to convert by passing in a specific value 
function calculatePounds($kg) {
    echo "<h1>". $kg." Kilos = ".($kg * 2.20462)." Pounds.</h1> <br/><br/>";
}

calculatePounds(6);




//  CONVERSION FROM METER TO YARD

//  Function to convert by passing in a specific value 
function calculateYards($meter) {
    echo "<h1>". $meter." Meters = ".($meter * 1.094)." Yards.</h1> <br/><br/>";
}

calculateYards(5);
 



//  CONVERSION FROM CELCIUS TO FARENHEIT 

//  Function to convert by passing in a specific value 
function calculateFarenheit($celsius) {
        echo "<h1>". $celsius." degrees Celsius = ".(($celsius * 9/5) + 32)." degrees Farenheit.</h1> <br/><br/>" ;
}

calculateFarenheit(4);


?>
