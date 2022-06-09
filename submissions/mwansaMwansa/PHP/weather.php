<?php

$tempOfDay = 50;

if($tempOfDay <= 20) {
    echo "It is freezing today.";
} else if($tempOfDay > 20 && $tempOfDay < 30) {
    echo "The weather is just perfect.";
} else if($tempOfDay >= 30 && $tempOfDay < 40) {
    echo "It's so hot today.";
} else {
    echo "Am I in the Sahara Desert?!";
}