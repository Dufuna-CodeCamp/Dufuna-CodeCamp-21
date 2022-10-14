var number = 123-7;

statement = "";

for(var i = 1; i <= number; i++){

    if( i % 3 == 0 && i % 5 !== 0 ){
        statement += "Software  <br><br>";
    }

    else if (i % 5 == 0 && i % 3 !== 0 ){
        statement += "Developer <br><br>";
    }

   else if(i % 3 == 0 && i % 5 == 0){
        statement += "Software Developer <br><br>";
    }

    else{
        statement += i + "<br><br>";
    }
}
    document.write(statement);
