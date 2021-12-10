<?php
  $names = ['Bola', 'Bayo', 'Bourne','Jason','John','Johanna','King','Kingsley'];
  $hobbies = ['cooking', 'sweeping', 'singing', 'dancing', 'running', 'football', 'books', 'keyboards'];

  // for ($i=0; $i < count($names); $i++) { 
  //   echo "My name is $names[$i].";
  //   echo "I love $hobbies[$i].<br>";
  // }

  foreach ($names as $name) {
    foreach ($hobbies as $hobby) {
      echo "My name is $name. I love $hobby. \n";
    }
  }