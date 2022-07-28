<?php
function unitConvert($unit){
    $pounds = $unit * 2.205;
    $yards = $unit * 1.094;
    $fahrenheits = ($unit * 1.8) + 32;
  
    echo "$unit  kilo = $pounds <br>";
    echo "$unit  Meters = $yards <br>";
    echo "$unit  celcius = $fahrenheits <br>";
  }
  unitConvert(15);
  

  
    ?>