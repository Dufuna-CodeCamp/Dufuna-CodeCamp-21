<?php 

    // unit converter

    // 

    function unitConvertor($sum){
        $pounds = $sum * 2.20462;
        $yard = $sum * 1.09361;
        $fahrenheit = $sum * 1.8 + 32;

        echo "$sum Kilos converts to: $pounds Pounds <br/>";
        echo "$sum meters converts to: $yard Yards <br/>";
        echo "$sum Degrees celcius converts to: $fahrenheit fahrenheit <br/>";
    }


    // calling the function

    unitConvertor(50);
     

?>