<?php 

$temperature = 25;

if($temperature <= 20) {
    echo "It is freezing today.";
} else if($temperature > 20 && $temperature < 30) {
    echo "The weather is just perfect.";
} else if($temperature >= 30 && $temperature < 40) {
    echo "It's so hot today.";
} else {
    echo "Am I in the Sahara Desert?!";
} 





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

