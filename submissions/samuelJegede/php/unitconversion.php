<?php

function convertUnits($number){
  $pound = $number * 2.205;
  echo("$number  kilos to pounds is $pound lb");
  echo"<br><br>";

  $yard = $number * 1.094;
  echo("$number  meters to yards is  $yard yards");
  echo"<br><br>";

  $fahrenheit = ($number * 1.8) + 32;
  echo("$number degrees Celsius to Fahrenheit is $fahrenheit  F");
  echo"<br><br>";

}
convertUnits(20);
?>