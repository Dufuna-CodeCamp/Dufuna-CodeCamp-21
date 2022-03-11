let positiveDifference = 123 - 7;
let i = 1;
while (i<= positiveDifference) {
    if (i % 3 === 0 && i % 5 === 0){
        document.write("Software Developer <br>");
    }else if (i % 3 === 0){
        document.write ("Software <br>");
    }else if (i % 5 === 0 ){
        document.write ("Developer <br>");
    }else{
        document.write (i ,"<br>");
    }
    i++;
}