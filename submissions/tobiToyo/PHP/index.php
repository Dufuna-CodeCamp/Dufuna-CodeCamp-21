<?php 
echo "Unit Converter <br><br>";

echo "Kilos to Pounds function <br><br>";

function kiloToPounds ($kilo) {
  $pound = $kilo * 2.20462262185;
  echo "$kilo kg = $pound lbs <br><br><br>";
}

kiloToPounds(30);


echo "Meters to Yards <br><br>";

function metersToYards ($meter) {
  $yard = $meter * 1.0936132983;
  echo "$meter m = $yard yards <br><br><br>"  ;
}

metersToYards(5);


function celciusToF ($celc) {
  $fare = ($celc * 9)/5 + 32;
  echo "$celc Celcius = $fare Fahrenheit <br>";
}

celciusToF(100);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Module</title>
</head>
<body>
  <br>
   <a href="weather.php">Check The Weather Here </a>
</body>
</html>