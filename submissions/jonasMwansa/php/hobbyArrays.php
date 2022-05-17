<?php

    //define and initialise the arrays
    $firstnames = ['Jonas', 'Francis', 'James', 'Richard', 'Joseph', 'Vincent', 'Edwin', 'Aaron'];
    $hobbies = [
            [' programming ','watching documentaries', 'wild exprolation','jogging'],
            ['playing football', 'watching soccer'], 
            ['betting', 'playing cards'], 
            ['laboratory experiments', 'candy crush'], 
            ['playing guitar', 'dancing', 'composing music'], 
            ['programming'], 
            ['photography', 'canoeing', 'swimming'], 
            ['wild exprolation','swimming', 'singing']
        ];

    // foreach( $firstnames as $hobby => $name ) {
    //     echo("My name is {$name} . I love {$hobbies[$hobby]} <br/>");
    // }

    //we loop through
    for($counter = 0; $counter<count($firstnames); $counter++){

        for($hobby =0; $hobby<count($hobbies); $hobby++){
           
            echo("My name is " . $firstnames[$counter] ." I love ");
            $counter++;
            
            for($hobbyItem=0; $hobbyItem<count($hobbies[$hobby]); $hobbyItem++){
                
                //we check if the hobby item is no the last one we add a comma otherwise  we append append a full stop
                if($hobbyItem!= count($hobbies[$hobby]) - 1){
                 echo ($hobbies[$hobby][$hobbyItem] .", ");
                }
                else{
                    echo ($hobbies[$hobby][$hobbyItem] .".");
                }
            }
            echo("<br/><br/>");
        }

    }

?>