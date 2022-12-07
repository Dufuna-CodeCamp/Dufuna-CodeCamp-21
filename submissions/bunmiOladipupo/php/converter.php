<?php
    function converter($pound=null,$yard=null,$celsiu=null){
        //kilos to pounds- 1kg = 2.20462pounds
        //metres to yards- 1m = 1.09361yards
        //celsius to fahrenheit (^C * 9/5) + 32
        $pounds = $pound * 2.20462;
        $yards = $yard * 1.09361;
        $celsius = ($celsiu * 9/5) + 32;
		if($pound != null){
        	
        echo "$pound kilos equals $pounds pounds<br>";
        }
        if($yard != null){
        	
        echo "$yard metres equals $yards yards<br>";
        }
        if($celsiu != null){
        	
        echo "$celsiu celsius equals $celsius Fahrenheit<br>";
        }

    }

    converter(1)
    converter(1,1)
    converter(1,1,1)
?>