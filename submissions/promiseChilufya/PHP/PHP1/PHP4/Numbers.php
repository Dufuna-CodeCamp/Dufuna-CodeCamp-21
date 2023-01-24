<?php

function Nmbers() {

    $counter = 101;

    
    echo("The numbers between 100 and 150 are: ".'<br/>');

    while($counter < 150 ) {
       
        echo($counter ."<br/>");

        $counter++;
    }

        echo("<br/>");

        echo ("The even numbers between 0 and 50 are: ".'<br/>');

        for($evenLoop = 2; $evenLoop<52; $evenLoop++) {

        if($evenLoop % 2 === 0) {

            echo ($evenLoop.'<br/>');
        }
     }      
    
}

Nmbers();
?>