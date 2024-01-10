<?php

//creating the individual arrays
$names = ["Craig", "Damola", "Steven", "Felicia", "Malik", "Tokunbo", "Austin", "Stephanie"];
$hobbies = ["Gardening", "Swimming", "Dancing", "Reading", "Travelling", "Chess", "Photography", "Cooking"];

//Combining the arrays
foreach (array_combine($names, $hobbies) as $name => $hobby) {

    echo "My name is $name. I love $hobby." . "<br>";
}
?>