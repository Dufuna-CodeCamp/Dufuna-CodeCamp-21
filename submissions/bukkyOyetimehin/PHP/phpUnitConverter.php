<?php
    function converter($param){
        //kilos to pounds- 1kg = 2.20462pounds
        //metres to yards- 1m = 1.09361yards
        //celsius to fahrenheit (^C * 9/5) + 32
        $pounds = $param * 2.20462;
        $yards = $param * 1.09361;
        $celsius = ($param * 9/5) + 32;

        echo "$param kilos equals $pounds pounds<br>";
        echo "$param metres equals $yards yards<br>";
        echo "$param celsius equals $celsius Fahrenheit<br>";

    }

    converter(23)
?>