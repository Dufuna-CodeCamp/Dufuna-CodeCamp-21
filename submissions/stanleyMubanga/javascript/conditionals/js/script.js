const sum = 123 - 7;
let statement = "";

for (i = 0; i <= sum; i++){
    if ( i % 3 == 0){
        statement += "Software <br>";
    }
    else if(i % 5 ==0){
        statement += "Developer <br>";
    }
    if (i % 3 == 0 || i % 5 == 0){
        statement += "Software Developer <br>";
    }
    else{
        statement += i + "<br>";
    }
}

document.write(statement);