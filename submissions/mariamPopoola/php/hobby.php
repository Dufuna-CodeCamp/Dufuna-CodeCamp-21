<?php
#Array of Hobby
$names = ["Mariam", "John", "Sarah", "David", "Goodwill", 
          "Oluwaseun", "Success", "Patiences"
        ];
        
$hobbies = ["cooking", "singing", "reading", "travelling", 
          "watching movies", "doing sport", "running","partying"
        ];

    
    for ($i=0; $i < 8; $i++) { 
        echo "My name is $names[$i]. I love $hobbies[$i].<br>";
    }