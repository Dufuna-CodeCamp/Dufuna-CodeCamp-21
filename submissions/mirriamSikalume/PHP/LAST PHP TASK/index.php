<?php
  echo("The numbers between 100 and 150 are: ".'<br/>');
  for ($m=101; $m <= 150; $m++) { 
    echo "$m<br>";
  }

  echo "<br><br>";

  echo ("The even numbers between 0 and 50 are: ".'<br/>');

  for ($m=0; $m < 50; $m++) { 
    if($m % 2 == 0){
      echo "$m<br>"; 
    }
  }
?>  