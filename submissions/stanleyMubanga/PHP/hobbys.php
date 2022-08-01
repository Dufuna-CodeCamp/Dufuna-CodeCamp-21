<?php 
    $person = array(
        array("Andrew ","Eating"),
        array("Mark ","Gaming"),
        array("Lisa ","Singing"),
        array("Mercy ","Soccer"),
        array("Peter ","Working out"),
        array("Derick ","Travelling"),
        array("Aaron ","Astrology"),
        array("Richard ","Painting"),
    );
    foreach ($person as [$firstname, $hobby]){
        echo "My name is .$firstname. I love .$hobby. <br/>";
    }
?>