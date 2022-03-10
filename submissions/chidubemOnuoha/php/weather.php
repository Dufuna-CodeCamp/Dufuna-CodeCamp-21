<?php 
  
  // creating variable
   $tempreture = 20;

   //conditional statement
   if($tempreture <= 20) {
       echo "It is freezing today";
   } 

   else if($tempreture > 20 && $tempreture < 30) {
       echo 'The whether is just perfect.';
   } 

  else if($tempreture >= 20 && $tempreture < 40){
    echo "It's so hot today";
  }

  else if ($temperature >= 40) {
    "Am i in the Sahara today?";
  }

?>