<?php 
echo "Unit Converter <br>";

echo "Kilos to Pounds function <br>";

function kiloToPounds ($kilo) {
  $pound = $kilo * 2.20462262185;
  echo "$kilo kg = $pound lbs <br>";
}

kiloToPounds(30);


echo "Meters to Yards <br>";

function metersToYards ($meter) {
  $yard = $meter * 1.093613;
  echo "$meter m = $yard yards <br>"  ;
}

metersToYards(5);


function celciusToF ($celc) {
  $fare = ($celc * 9)/5 + 32;
  echo "$celc Celcius = $fare Fahrenheit <br>";
}

celciusToF(100);

?>