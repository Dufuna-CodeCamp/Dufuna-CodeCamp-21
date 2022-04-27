<?php


$value = $_POST['number'];  

$kilo =  2.20462262185;

function Temperature() {

    $number = $_POST['number'];
    
    if($number <=20) {

        echo("It is freezing today");
    } else if ($number > 20 && $number <30 ) {

        echo("The weather is just perfect");

    } else if ($number >=30 && $number <40 ) {

        echo("It's so hot today.");

    } else if ($number >=40 ) {

        echo("Am I in the Sahara Desert?!");
    }

}
Temperature();
?>