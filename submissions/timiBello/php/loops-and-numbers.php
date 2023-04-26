<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loops and Numbers</title>
</head>
<body>
  <h2>Numbers between 100 and 150</h2>

  <?php

      for ($i = 101; $i < 150; $i++) {
        echo $i . "<br>";
      }

?>

<br>

<h2>Even numbers between 0 and 50</h2>

<?php
    
    for ($i = 2; $i < 50; $i += 2) {
      echo $i . "<br>";
    }

?>
</body>
</html>