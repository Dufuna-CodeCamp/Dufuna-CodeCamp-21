function printMultiples() {
    for(let value = 1; value <= 116; value++) {
        if (value % 3 === 0 && value % 5 === 0) {
            document.write("Software Developer" +"<br >");
        } else if (value % 3 === 0) {
            document.write("Software"+"<br >");
        } else if (value % 5 === 0) {
            document.write("Developer" +"<br >");
        } else {
            document.write(value +"<br >");
        }
    }
}

printMultiples();