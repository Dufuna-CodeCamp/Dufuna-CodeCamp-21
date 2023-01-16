<?php

if (isset($_POST['submit'])) {
    switch ($_POST['convert']) {
        case "k-p";
            $result = kilos_to_pounds($_POST['value']);
            $old_unit = "Kilos";
            $new_unit = "Pounds";
            break;
        case "p-k";
            $result = pounds_to_kilos($_POST['value']);
            $old_unit = "Pounds";
            $new_unit = "Kilos";
            break;

        case "m-y";
            $result = meters_to_yards($_POST['value']);
            $old_unit = "Meters";
            $new_unit = "Yards";
            break;
        case "y-m";
            $result = yards_to_meters($_POST['value']);
            $old_unit = "Yards";
            $new_unit = "Meters";
            break;

        case "c-f";
            $result = celsius_to_farenheit($_POST['value']);
            $old_unit = "Celsius";
            $new_unit = "Farenheit";
            break;
        case "f-c";
            $result = farenheit_to_celsius($_POST['value']);
            $old_unit = "Farenheit";
            $new_unit = "Celsius";
            break;
        
    }
}

function kilos_to_pounds($given_value) {
    return $given_value * 2.205;
}
function pounds_to_kilos($given_value) {
    return $given_value * 0.454;
}

function meters_to_yards($given_value) {
    return $given_value * 1.094;
}
function yards_to_meters($given_value) {
    return $given_value * 0.914;
}

function celsius_to_farenheit($given_value) {
    return $given_value*9/5 + 32;
}

function farenheit_to_celsius($given_value) {
    return 5/9*($given_value - 32);
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converter</title>
</head>
<body>

    <form method="post">
        Convert <input type="text" name="value" /> <br><br>
        <select name="convert">
            <option value="">Select Conversion</option>
            <optgroup label="Units of Weight">
                <option value="k-p">Kilos to Pounds</option>
                <option value="p-k">Pounds to Kilos</option>
            </optgroup>


            <optgroup label="Units of Length">
                <option value="m-y">Meters to Yards</option>
                <option value="y-m">Yards to Meters</option>
            </optgroup>
            

            <optgroup label="Units of Temperature">
                <option value="c-f">Celsius to Farenheit</option>
                <option value="f-c">Farenheit to Celsius</option>
            </optgroup>
        </select>

        <input type="submit" name="submit" value="Convert" />
    </form>

    <?php
        if (!empty($result))
            echo '<b><p>' . $_POST['value'].$old_unit . ' = ' . $result.$new_unit . '</b></p>';
    ?>
    
</body>
</html>
