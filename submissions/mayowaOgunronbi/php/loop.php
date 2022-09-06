<?php

echo "<h2>Numbers between 100 and 150</h2>";
for($i = 101; $i < 150; $i++) {
    echo $i . "<br>";
}


echo "<h2>Even Numbers between 0 and 50</h2>";
for($i = 2; $i < 50; $i++) {
   
    if($i % 2 == 0) {
        echo $i . "<br>";
    }
    
}