<?php

function Hobby() {

  $namesArray = [
                    "John",
                    "Chilufya",
                    "Charles",
                    "Julia",
                    "Zoe",
                    "Tolutope",
                    "Adda",
                    "Mulubwa"
                ];

  $hobbiesArray = [
                    ["Reading","Driving","Travelling","Watching Soccer"],
                    ["listening to music","and Coding"],
                    ["Designing","listening to music","Learning New Things"],
                    ["listening to music","Reading","Learning new things"],
                    ["Driving","Reading","Travelling"],
                    ["Designing","Watching Web development YouTube vidoes","and Coding"],
                    ["T-shirt printing","Travelling","Exploring new places"],
                    ["Playing video games","listening to music","Watching soccer"]
                  ];

  $nameslength = count($namesArray);

  $hobbieslength = count($hobbiesArray);
  
  for($i = 0; $i < $nameslength; $i++) {  
      
    for($j= 0; $j<$hobbieslength; $j++) {
          
            $individualHobbyLength = count($hobbiesArray[$j]);

            echo "My name is  ".$namesArray[$i].". I love ; ";

            $i++;
      
            for($k = 0; $k < $individualHobbyLength; $k++) {
          
                  if($k!==$individualHobbyLength-1) {

                        echo(" ".$hobbiesArray[$j][$k].",");

                  } else {

                        echo(" ".$hobbiesArray[$j][$k].".");

                  }

          }

      echo "<br/>";
      echo "<br/>";
     
    }

    echo "<br/>"; 

  }

}

Hobby();
?>