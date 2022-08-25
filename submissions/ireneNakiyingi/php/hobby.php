<?php
$first_names = [ "Abel", "Jean", "Heather", "Asher", "Zoe"];
$hobbies = [ "fishing", "knitting", "skating", "reading", "football"];

$people= array_combine($first_names, $hobbies);
foreach ( $people as $first_name => $hobby){
    echo " My name is $first_name. I love $hobby. <br> ";
}
?>