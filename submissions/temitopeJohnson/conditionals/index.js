var x,  /*the lower end number*/
    y,  /*the positive difference*/
    d3, /*the modulus of 3*/
    d5, /*a list of the numbers between x and y*/

y = 123 - 7;

for (x = 1; x <= y; x++) {
    list.push(x); /*adds each number from x to y to list*/
    document.write(list); /*prints out the list*/
}

for (x = 1; x <= y; x++) {
    d3 = x % 3;
    d5 = x % 5;
    if (d3 == 0 && d5 == 0) {
        document.write(' ' + 'Software Developer,' + ' ');
    }
    else if (d5 == 0) {
        document.write(' ' + 'Developer,' + ' ');
    }
    else if (d3 == 0) {
        document.write(' ' + 'Software,' + ' ');
    }
    else {
        document.write(' ' + x + ',' + ' ');
    }
}
