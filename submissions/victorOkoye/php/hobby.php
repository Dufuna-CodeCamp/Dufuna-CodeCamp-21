<?php


$names = [
    "Usman",
    "Tope",
    "Chinaza",
    "Gabriel",
    "Victoria",
    "Aisha",
    "Martha",
    "Chinedu"
];

$hobbies = [
    "Usman"=> "football",
    "Tope"=> "writing",
    "Chinaza" => "jumping",
    "Gabriel" => "singing",
    "Victoria" => "teaching",
    "Aisha" => "swimming",
    "Martha" => "running",
    "Chinedu" => "sky-diving"
];

foreach ($names as $name){
    echo "My name is $name. I love $hobbies[$name]. <br>";
};
