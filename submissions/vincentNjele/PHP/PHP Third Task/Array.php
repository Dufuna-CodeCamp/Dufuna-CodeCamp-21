<?php

function HobbiesArray() {

  $namesArray = [
                    "Vincent",
                    "Jonas",
                    "Afolakemi",
                    "Tolulope",
                    "Toks",
                    "Ireti",
                    "Iyoha",
                    "Benjamin"
                ];

  $hobbiesArray = [
                    ["Singing","Reading","listening to music","Travelling"],
                    ["listening to music","Eating"],
                    ["Typing","listening to music","Dancing"],
                    ["listening to music","Dancing","Learning new things"],
                    ["Reading","Playing Soccer","Travelling"],
                    ["Watching Software related documentaries","Watching soccer","Playing Piano"],
                    ["Playing Guitar","Travelling","Exploring new places"],
                    ["Singing","listening to music","Playing Soccer"]
                  ];

  $nameslength = count($namesArray);

  $hobbieslength = count($hobbiesArray);
  
  for($i = 0; $i < $nameslength; $i++) {  
      
    for($j= 0; $j<$hobbieslength; $j++) {
          
            $individualHobbyLength = count($hobbiesArray[$j]);

            echo "My name is  ".$namesArray[$i].". I love; ";

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

HobbiesArray();
?>