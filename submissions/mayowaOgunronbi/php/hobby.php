<?php

$firstname = ["John", "Jerry", "Barry", "Sade", "Bola", "Chima", "Salisu", "Precious"];
$hobby = ["Football", "Swimming", "Working out", "Singing", "Praying", "Eating", "Sewing", "Reading"];

for($i = 0; $i < count($firstname); $i++) {
    echo "<h2>My name is " . $firstname[$i] . ". I love " . $hobby[$i] . ".<br></h2>";
} 

?>