<?php
    function unitConverter($unit) {

        $pounds = 2.205;
        $yard = 1.094;
        $fahrenheit = $unit * 1.8 + 32;

        echo ("$unit   Kilogram = " . $unit * $pounds . " Pounds <br><br>");
        echo ("$unit   Meters =   " . $unit * $yard . " Yards <br><br>");
        echo ("$unit   Celsius =   " . $unit * $fahrenheit . " Fahrenheit <br><br>");
    }

    unitConverter($unit);
?>