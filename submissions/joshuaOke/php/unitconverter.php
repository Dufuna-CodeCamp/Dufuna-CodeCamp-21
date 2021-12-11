<?php

function convertUnits($var){
  $pound = $var * 2.205;
  $yard = $var * 1.094;
  $fahrenheit = ($var * 1.8) + 32;
}