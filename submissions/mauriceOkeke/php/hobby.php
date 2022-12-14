<?php


//  Create array

$names = ["John", "Emma", "Jenny", "Alice", "Daniel", "Tolu", "Maryann", "Goodness"];
$hobbies = ["Swimming", "Reading", "Travelling", "Skating", "Sleeping", "Farming", "Watching football", "Video games"];

$namesHobbies = array_combine($names,$hobbies);


foreach($namesHobbies as $name => $hobby){
    echo "My name is $name. " . "I love $hobby" . "<br>";
}