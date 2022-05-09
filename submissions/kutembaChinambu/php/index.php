<?php

function converter($num) {
    $pounds = $num * 2.20462;
    $yards = $num * 1.09361;
    $fahrenheit = $num * 1.8 + 32;

    echo "$num Kilos converts to: $pounds Pounds <br/>";
    echo "$num Meters converts to: $yards Yards <br/>";
    echo "$num Celcius converts to: $fahrenheit Fahrenheit <br/>";
}

converter(20);

?>