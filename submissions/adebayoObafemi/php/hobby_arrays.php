<?php
    $people = ["Bayo", "Oluwabusayo", "Ayomide", "Ola", "Tolulope", "Elizabeth", "Tinuola", "Adebayo"];
    $hobbies = ["reading", "cooking", "visiting new places", "research", "diving", "skating", "helping people", "mentoring"];

    for($i = 0; $i < sizeof($people); $i++) {
        echo "My name is {$people[$i]}. I love {$hobbies[$i]}. <br>";
    }

?>