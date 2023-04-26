
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Module</title>
</head>
<body>


  <!--Celsius to Farenheit  -->
  <h2>Celsius (&#8451;) to Farenheit (&#8457;) Conversion </h2>
  <form  method="post">
    <label for="celsiustof"> Enter Celsius value  </label> <br>
    <input type="number" name="celsiustof" id="">
    <br> <br>  
    
    <!-- I put the function here because this is where it will be displayed on the page -->
    <?php

     
        $cel = $_POST["celsiustof"];


        // this if statement ensures that the function is only called when a value is inputed 
        if ($_POST["celsiustof"]) {
        
          function kiloToPounds ($celsius) {
            $farenh = ($celsius * 1.8) + 32;
            echo "$celsius &#8451; = $farenh &#8457; <br><br>";
          }
        
          kiloToPounds($cel);
        }
        
    ?>

    <input type="submit" value="Convert">
  </form>
  

  <!-- Kilo to Pound Conversion -->

  <h2>Kilos(kg) to Pounds(lb) Conversion </h2>
  <form  method="post">
    <label for="kilotop"> Enter kilos value  </label> <br>
    <input type="number" name="kilotop" id="">
    <br> <br>  
    
    <!-- I put the function here because this is where it will be displayed on the page -->
    <?php

     
        $kil = $_POST["kilotop"];


        // this if statement ensures that the function is only called when a value is inputed 
        if ($_POST["kilotop"]) {
        
          function kiloToPounds ($kilo) {
            $pound = $kilo * 2.205;
            echo "$kilo kg = $pound lbs <met";
          }
        
          kiloToPounds($kil);
        }
        
    ?>

    <input type="submit" value="Convert">
  </form>
  
  <!-- Meter to Yard Conversion -->

  <h2>Meter(m) to Yards(yd) Conversion </h2>
  <form  method="post">
    <label for="mtoy"> Enter meter value  </label> <br>
    <input type="number" name="mtoy" id="">
    <br> <br>  
    
    <!-- I put the function here because this is where it will be displayed on the page -->
    <?php

     
        $met = $_POST["mtoy"];


        // this if statement ensures that the function is only called when a value is inputed 
        if ($_POST["mtoy"]) {
        
          function metertoyard ($meter) {
            $yard = $meter * 1.094;
            echo "$meter m = $yard yd <br><br>";
          }
        
          metertoyard($met);
        }
        
    ?>

    <input type="submit" value="Convert">
  </form>
  
  

   
   <!-- <a href="weather.php">Check The Weather Here </a> -->
</body>
</html>