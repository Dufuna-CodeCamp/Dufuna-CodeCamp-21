
var x= 0;
var y= 7;
var z= 123;
var f= (z - y);
while (x < f) {
    x += 1;
    if ((x%3==0) && (x%5==0)) {
    document.write("software developer");
} else if (x%3==0) {
    document.write("software");
} else if (x%5==0){
    document.write("developer");
}
}

