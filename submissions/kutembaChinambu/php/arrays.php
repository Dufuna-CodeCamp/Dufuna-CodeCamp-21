<?php
$user = array(
    array("Karen ","Swimming"),
    array("John ","Reading"),
    array("Peter ","Singing"),
    array("Mary ","baking"),
    array("Patrick ","Hunting"),
    array("Molly ","Horse back riding"),
    array("Ellis ","Playing guitar"),
    array("Janet ","Sewing"),
);
foreach ($user as [$firstname, $hobby]){
    echo "My name is $firstname. I love $hobby. <br/>";
}