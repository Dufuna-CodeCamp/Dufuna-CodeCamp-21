<?php

// To display every number between 100 and 150 each on a new 
for ($i = 100; $i <= 150; $i++) {
    echo $i;
    echo "<br/>";
}

//To display all even numbers between 0 and 50 each on a new 
while ($num <= 50) {
    if ($num % 2 == 0) {
        echo "$num <br/>";
    }
    $num++;
}
