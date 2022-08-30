<?php

$people = ['David', 'Mayowa', 'Jhonson', 'Ada', 'Mary', 'Chinedu', 'Modupe', 'Seun' ];

$hobby = [
    'playing football',
    'watching movies',
    'hiking',
    'Yoga',
    'running',
    'snowballing',
    'skating',
    'diving'
];


$people_hobby = array_combine($people, $hobby);

foreach($people_hobby as $key => $value ){
    echo "My name is $key. I love $value. <br>";
}