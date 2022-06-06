var x = 1;
    while (x <= 116) {
        
        if (x % 3 == 0) {
            document.write("Software");
        }
        if (x % 5 == 0) {
            document.write("Developer");
        }
        if (x % 3 && 5 == 0) {
            document.write("Software Developer");
        }
        else {
            document.write(x + "<br>");
        }
        x++;
    }