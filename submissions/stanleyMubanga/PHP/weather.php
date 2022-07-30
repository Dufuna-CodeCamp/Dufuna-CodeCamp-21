<?php 
    
    $degrees = " ";

    if ( $degrees <= 20 ) {

        echo "It is freezing today";

    } else if ( $degrees > 20 && $degrees < 30 ) {

        echo "The weather is just perfect.";

    } else if( $degrees >= 30 && $degrees < 40 ) {

        echo "its so hot today.";

    } else if ( $degrees >= 40 ) {

        echo "Am I in the Sahara Desert?!";

    }

?>