<?php
    function weather($temp){
        

        if($temp<=20){

            echo ("it is freezing today.<br/>");
        
        }elseif($temp>20 && $temp<30){
            
            echo ("The weather is just perfect.<br/>");
        
        }elseif($temp>=30 && $temp<40){
            
            echo ("It's so hot today.<br/>");
        
        }elseif($temp>=40){
        
            echo ("Am I in the Sahara Desert?!<br/>");
        
        }

        else{
            echo("invalid temperature");
        }
    }

    weather(31);
    
?>