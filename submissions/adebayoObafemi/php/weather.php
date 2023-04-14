<?php
    $temperature = 27;

    if($temperature <= 20) {
        echo "It is freezing today <br>";
    } elseif($temperature > 20 && $temperature < 30) {
        echo "The weather is just perfect. <br>";
    } elseif($temperature >= 30 && $temperature < 40) {
        echo "It's so hot today. <br>";
    } elseif($temperature >= 40) {
        echo "Am i in the Sahara Desert?!";
    } else {
        echo "Enter a valid value!";
    }
?>