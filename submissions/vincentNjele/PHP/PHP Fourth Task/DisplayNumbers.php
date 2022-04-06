<?php

function displayNimbers() {

    $counter = 101;

    
    echo("The numbers between 100 and 150 are: "."<br/>");

    while($counter < 150 ) {
       
        echo($counter ."<br/>");

        $counter++;
    }

        echo("<br/>");

        echo ("The even numbers between 0 and 50 are: "."<br/>");

        for($evenLooper = 2; $evenLooper<50; $evenLooper++) {

        if($evenLooper % 2 === 0) {

            echo ($evenLooper."<br/>");
        }
     }      
    
}

displayNimbers();
?>