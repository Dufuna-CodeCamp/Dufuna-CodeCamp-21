var difference = 123 - 7;

for (var i = 1; i <= difference; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        document.write("Software Developer");
    }
    else if(i % 3 == 0) {
        document.write("Developer");
    }
    else if(i % 5 == 0) {
        document.write("Developer");
    }
    else {
        document.write(i);
    }
}