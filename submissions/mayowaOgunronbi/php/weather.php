<?php 

$temperature = 25;

if ($temperature <= 20) {
    echo "<h1>It is freezing today.</h1>";
} else if ($temperature > 20 && $temperature < 30) {
    echo "<h1>The weather is just perfect.</h1>";
} else if ($temperature >= 30 && $temperature < 40) {
    echo "<h1>It is so hot today.</h1>";
} else {
    echo "<h1>Am I in the Sahara Desert.</h1>";
} 

?>