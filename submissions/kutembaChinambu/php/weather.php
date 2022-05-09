<?php
$temp = 90;

switch($temp) {
    case ($temp <=20):
    echo "It is freezing today";
    break;
    case ($temp > 20 && $temp < 30):
    echo "The weather is just perfect.";
    break;
    case ($temp >= 30 && $temp< 40):
    echo "It's so hot today";
    break;
    case ($temp >= 40):
    echo "Am I in the Sahara Desert?";
    break;
}
?>