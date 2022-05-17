<?php

    //define and initialise the arrays
    $firstnames = ['Jonas', 'Francis', 'James', 'Richard', 'Joseph', 'Vincent', 'Edwin', 'Aaron'];
    $hobbies = ['programming', 'playing football', 'betting', 'laboratory experiments', 'playing guitar', 'programming', 'photography', 'exploration'];

    //we loop through
    foreach( $firstnames as $hobby => $name ) {
        echo("My name is {$name} . I love {$hobbies[$hobby]} <br/>");
    }

?>