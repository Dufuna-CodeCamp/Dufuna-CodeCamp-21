    
    <?php
$temperature = $_POST["weather"];

if($temperature <= 20){
    echo"It is freezing today";
  
  }elseif($temperature > 20 && $temperature < 30){
    echo"The weather is just perfect";
  
  }elseif($temperature >= 30 && $temperature < 40){
    echo"It is hot today";
  
  }elseif ($temperature <= 40){
    echo"Am I in sahar Desert?";
  }
  
