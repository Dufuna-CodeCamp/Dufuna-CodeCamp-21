<?php
$temperature = 0;

if ($temperature <= 20 ){
    echo "It is freezing";
} elseif($temperature > 20 && $temperature < 30){
    echo "The weather is just perfect";
} elseif ($temperature >= 30 && $temperature < 40) {
    echo "It is hot Today";
} 
elseif ($temperature > 40){
    echo "Am i in the sahara desert?";
}



?>