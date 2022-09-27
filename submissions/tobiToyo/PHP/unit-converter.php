<?php 
echo "Unit Converter <br><br>";

echo "Kilos to Pounds function <br><br>";

function kiloToPounds ($kilo) {
  $pound = $kilo * 2.20462262185;
  echo "$kilo kg = $pound lbs <br><br><br>";
}

kiloToPounds($_POST["kilotop"]);


echo "Meters to Yards <br><br>";

function metersToYards ($meter) {
  $yard = $meter * 1.0936132983;
  echo "$meter m = $yard yards <br><br><br>"  ;
}

metersToYards($_POST["metertoy"]);

echo "Celcius to Fahrenheit <br><br>";

function celciusToF ($celc) {
  $fare = ($celc * 9)/5 + 32;
  echo "$celc Celcius = $fare Fahrenheit <br>";
}

celciusToF($_POST["celciustof"]);

?>