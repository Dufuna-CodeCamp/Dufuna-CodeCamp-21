<?php

$firstname = ["Gideon", "Tom", "James", "Timileyin", "Destiny", "Bukola", "Daniel", "Promise"];
$hobby = ["Basketball", "Swimming", "Football", "Singing", "Praying", "Skipping", "Traveling", "Reading"];

for($i = 0; $i < count($firstname); $i++) {
    echo "<h2>My name is " . $firstname[$i] . ". I love " . $hobby[$i] . ".<br></h2>";
} 

?>