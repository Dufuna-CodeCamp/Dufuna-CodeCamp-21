<?php
# unit converter
function convertUnits($a){
    $kiloToPound = $a * 2.205;
    $meterToYard = $a * 1.094;
    $fahrenheit = ($a * 9/5) + 32;

    echo "$kiloToPound <br> $meterToYard <br> $fahrenheit";
  }

  convertUnits(3);