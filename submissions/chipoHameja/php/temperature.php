<?php

$temperature = 35;

if($temperature <= 20) {
    echo "It is freezing today";
}

elseif($temperature > 20 && $temperature < 30) {
    echo "The weather is just perfect.";
}

elseif($temperature >= 30 && $temperature < 40) {
    echo "It's so hot today.";
}

elseif($temperature >= 40) {
    echo "Am I in the Sahara Desert?!";
}