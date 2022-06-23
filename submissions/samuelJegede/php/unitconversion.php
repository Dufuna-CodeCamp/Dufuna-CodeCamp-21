<?php

function convertUnits($number){
  $pound = $number * 2.205;
  echo($number. " kilos". " to pounds is ".$number * $pound." lb");
  echo"<br/>";

  $yard = $number * 1.094;
  echo($number." meters". " to yards is ".$yard * $number." yards");
  echo"<br/>";

  $fahrenheit = ($number * 1.8) + 32;
  echo($number." degrees Celsius to Fahrenheit is ");
  echo(($number * 9/5) + 32 ." F");
  echo"<br/>";

}
convertUnits(20);
?>