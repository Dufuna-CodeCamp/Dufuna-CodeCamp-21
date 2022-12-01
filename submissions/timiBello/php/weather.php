<?php

 $temperatureDay = 30;

 if ($temperatureDay <= 20) {
     echo "It is freezing today <br>";
 }elseif ($temperatureDay > 20 and $temperatureDay < 30) {
     echo "The weather is just perfect <br>";
     echo "The weather is just perfect <br>";
  }elseif ($temperatureDay >= 30 and $temperatureDay < 40)  {
     echo "It's so hot today <br>";
 }else {
     echo "Am I in the Sahara Desert?! <br>";
 }

?>