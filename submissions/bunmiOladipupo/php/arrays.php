<?php
    $names = ['Ade', 'Bob', 'Lizzy', 'Femi', 'Denzel', 'Sarah', 'Shalom','Moses'];
    $hobbies = ['cooking','reading','swimming','movies','walking','sitting','researching','travelling'];
    //print_r($names);

    function introduceSelf(){
        global $names, $hobbies;
        for ($i=0; $i < count($names); $i++) { 
            $individualName = $names[$i];
            $individualHobby = $hobbies[$i];
            echo "<h3>My name is $individualName. I love $individualHobby.</h3>";
        }
    }

    introduceSelf()
?>