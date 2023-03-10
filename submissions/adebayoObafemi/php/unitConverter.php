<?php
    function converter($input) {
        echo "{$input} Kilo = " , $input * 2.205 , " pound" , "<br>";
        echo "{$input} Meters = " , $input * 1.094 , " yard" , "<br>";
        echo "{$input} Celsius = " , $input * (1.8 + 32) , " fahrenheit" , "<br>"; 
    };

    converter(10);
?>