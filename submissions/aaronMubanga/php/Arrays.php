<?php
    $people = ["Eron", "John", "Ben", "Hurry", "Nancy", "Ethel", "Lucy", "Mark"];

    $hobbies = ["soccer", "video games", "cooking", "writing", "racing", "gardening", "programming", "eating"];


   for ($i=0; $i< count($people); $i++){
    for($j=0; $j< count($hobbies); $j++){
        if ($i === $j){
            echo ("My name is " . $people[$i] . ". I love $hobbies[$j]<br>");
        }
    }
   }  
    
?>