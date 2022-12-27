<?php



// using while loop to display numbers 
$number = 101;

while ($number <= 150){
    echo "$number" . "<br>";
    $number++;
}



// for loop for all even numbers from 0 t0 50

for ($i = 0; $i <= 50; $i++){

    if ($i % 2 == 0){
        echo $i . "<br>";
    }
    
}

