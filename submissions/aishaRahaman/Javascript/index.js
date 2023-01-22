let x = 123;
x -= 7;
//document.write(x); 

var str = "";
for(i = 1; i <= x; i++) {
    //Multiples of 3
    if (i % 3 == 0 ) {
        document.write("Software" + "<br>");
        //Multiples of 5
    }else if (i % 5 == 0) {
        document.write("Developer" + "<br>");
        //Multiples of 3 and 5
    }else if (i % 3 == 0 && i % 5 == 0) {
        document.write("Software Developer");
        //Multiples of none
    }else{
        document.write(i + "<br>");
    }
}


