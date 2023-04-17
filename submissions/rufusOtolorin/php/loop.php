<?php

echo "<h3>This are numbers between 100 and 150</h3>";
for($i = 101; $i < 150; $i++) {
    echo $i . "<br>";
}


echo "<h3>This are even numbers between 0 and 50</h3>";
for($i = 2; $i < 50; $i++) {
   
    if($i % 2 == 0) {
        echo $i . "<br>";
    }
    
}