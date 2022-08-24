<form  method="post">
            <label for="temperature"> what is the temperature?
            </label> <br/><br/>
            <input type="number" name="temperature">  <br/>
            <input type="submit">
</form>
<?php 
$temperature = $_POST['weather'];

if ($temperature <= 20){
    echo "It is freezing today";
} elseif($temperature > 20 && $temperature < 30){
    echo" The weather is just perfect";

} elseif($temperature >= 30 && $temperature < 40){
    echo "It's so hot today";
} elseif ($temperature > 40){
    echo "Am I in the Sahara Desert?!";
}
