var x,
    y,
    d3,
    d5,
    list =[];

y = 123 - 7;

for (x = 1; x <= y; x++) {
    list.push(x);
    document.write(list);
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
