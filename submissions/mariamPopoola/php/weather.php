
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input>
    </form>
</body>
</html> -->

<?php
# to check the temperature of the day
$temperature = 29;

if($temperature <= 20){
    echo"It is freezing today";

}elseif($temperature > 20 && $temperature < 30){
    echo"The weather is just perfect";

}elseif($temperature >= 30 && $temperature < 40){
    echo"It is hot today";

}elseif ($temperature <= 40){
    echo"Am I in sahar Desert?";
}