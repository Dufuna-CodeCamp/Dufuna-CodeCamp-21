<?php
function kgtolbs($parameter){
    echo " $parameter Kilo to pound is = " . $parameter * 2.205 . " pounds. <br>";
}
function mtoyards($parameter){
    echo "$parameter Meter to yard is = " . $parameter * 1.094 . " yards. <br>";
}
function CtoF($parameter){
    $fah = (1.8* $parameter+32);
    echo "$parameter Celsuis to fahrenheit is  = $fah F.<br>";
}
kgtolbs(46);
mtoyards(97);
CtoF(37);