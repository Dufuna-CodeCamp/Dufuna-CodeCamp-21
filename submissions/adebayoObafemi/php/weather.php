<?php
    $i = 27;

    if($i <= 20) {
        echo "It is freezing today <br>";
    } elseif($i > 20 && $i < 30) {
        echo "The weather is just perfect. <br>";
    } elseif($i >= 30 && $i < 40) {
        echo "It's so hot today. <br>";
    } elseif($i >= 40) {
        echo "Am I in the Sahara Desert?!";
    }
?>