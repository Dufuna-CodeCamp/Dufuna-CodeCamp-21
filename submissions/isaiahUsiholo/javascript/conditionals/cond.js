//function program that prints the numbers from 1 and the positive difference betweeb 7 and 123

function difference(x, y) {
    return y - x;
}
// console.log(difference(7, 123));
let number = new Array();
number.length = difference(7, 123);
// console.log(number.length);
for (let i = 1; i <= number.length; i++) {
    // console.log(i);
    
    if (i % 3 == 0 && i % 5 == 0) {
        // numbers that are multiples of 3 and 5
        document.write(" " + " " + "(softwareDeveloper)" + "</br>");
    }
    else if (i % 3 == 0) { 
        //numbers that are multiples of 3
        document.write(" " + "software" + "</br>");
    }
    else if (i % 5 == 0) {
        //numbers that are multiples of 5
        document.write(" " + "developer" + "</br>");
    }
    else {
        document.write(" " + i + "</br>");
    }
}
