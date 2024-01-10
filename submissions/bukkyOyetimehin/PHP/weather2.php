<?php

 $temperatureDay = 15;

 if ($temperatureDay <= 20) {
     echo "It is freezing today <br>";
 }
 elseif ($temperatureDay > 20 && $temperatureDay < 30 ) {
     echo "The weather is just perfect <br>";
  }
	elseif ($temperatureDay >= 30 && $temperatureDay < 40 )  {
     echo "It's so hot today <br>";
 }
 elseif($temperatureDay >= 40 ) {
     echo "Am I in the Sahara Desert?! <br>";
 }

?>