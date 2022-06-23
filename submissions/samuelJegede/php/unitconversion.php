<?php

function convertUnits(){
  $pound = $number * 2.205;
  echo($number." from kilos to pounds is: ".$number * $pound." lb");
  echo"<br/>";

  $yard = $number * 1.094;
  echo($number." from meters to yards is: ".$yard * $number." yards");
  echo"<br/>";

  $fahrenheit = ($number * 1.8) + 32;
  echo($number." from celcius to fahrenheit is: ");
  echo(($number * 9/5) + 32 ." F");
  echo"<br/>";

}
convertUnits();
?>