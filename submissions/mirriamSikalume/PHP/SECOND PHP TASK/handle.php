<?php

    $value = $_POST['weather'];
    if($value <=20) {
        echo("It is freezing today");
    }else if ($value > 20 && $value<30 ) {
        echo("The weather is just perfect");
    }else if ($value >=30 && $value <40 ){
        echo("It's so hot today.");
    }else if ($value >=40 ) {
        echo("Am I in the Sahara Desert..?!");
    }
    else{
        echo"invalid temperature";
    }

?>



