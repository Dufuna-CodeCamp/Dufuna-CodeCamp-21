<?php
    function displayEvenNumbers(){
        for ($i=0; $i <= 50; $i++) { 
            if ($i % 2==0) {
                echo $i."<br>";
            }else{
                continue;
            }
        }
    }
    displayEvenNumbers()
?>