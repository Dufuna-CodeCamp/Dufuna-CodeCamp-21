<?php
    $temp = 20;

    if($temp <= 20){
        echo "It is freezing today";
    }elseif($temp > 20 && $temp < 30){
        echo "The weather is just perfect";
    }elseif($temp >= 30 && $temp < 40){
        echo "It's so hot today";
    }elseif($temp >= 40){
        echo "Am I in the Sahara Desert?!";
    }else{
        echo "Invalid input";
    }
    
?>