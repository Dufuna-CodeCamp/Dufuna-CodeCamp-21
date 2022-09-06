<?php


$arrayFirstName = ['Jane', 'Mary', 'Peter', 'John', 'Jessica', 'Paul', 'Natasha', 'David'];
$arrayHobbies = ['Dancing', 'Writing', 'Reading', 'Watching TV', 'Eating', 'Baking', 'Running', 'Cooking'];

for($i = 0; $i < count($arrayFirstName); $i++) {
    echo "My name is ".$arrayFirstName[$i].". I love ".$arrayHobbies[$i].".<br >";
}