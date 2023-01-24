<?php

define("KTOP", 2.20462);
define("MTOY", 1.09361);

function convert($value) {
    echo($value. " Kilos = ". ($value * KTOP). " Pounds <br />");
    echo($value. " Meters = ". ($value * MTOY). " Yards <br />");
    echo($value. " Celcius = ". (($value * 9/5) + 32). " Farenheit <br />");
}

convert(2);