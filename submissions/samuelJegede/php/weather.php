<?php

$temperature = 50;

if ( $temperature <= 20 ) {
  echo "It is freezing today";
}
else if ( $temperature > 20 && $temperature < 30 ) {
  echo "The weather is just perfect";
}
else if ( $temperature >= 30 && $temperature < 40 ) {
  echo "It's so hot today";
}
else {
  echo "Am I in the Sahara Desert?!";
}