<?php

    echo("EVERY NUMBER BETWEEN 100 AND 150<br/>");
    $num = 101;
    do {
        echo ($num . "<br/>");
        $num++;
    }while($num<150);


    echo("<br/> EVEN NUMBERS BETWEEN 0 AND 50 <br/>");
    
    for($number =0; $number <50; $number ++){
     
        if($number % 2 ===0){
            if($number==0){
                continue;
            }
            echo($number ."<br/>");
        }
        
    }

?>