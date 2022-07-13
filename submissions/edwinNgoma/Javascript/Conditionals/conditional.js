
var difference = 7-123;

difference = Math.abs(difference);

var num = 1;

document.write("The positive difference between 7 and 123 is: "+ difference + "</br>");

while(num <= difference) {

    if(num%3 == 0 && num%5 == 0) {
        document.write("Software Developer "+" </br>");
    }

    else if(num%5 == 0) {

        document.write("Developer"+ "</br>");
    }

    else if(num%3 == 0) {

        document.write("Software " + "</br>");
    }

    else {

        document.write(num +" </br>");

    }

    num++;

}

