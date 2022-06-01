// calculate positive difference between 7 and 123
let maximumNumber = 123 - 7;

//write loop to solve the three conditionsx
for (let i = 1; i <= maximumNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("Software Developer")
    }
    else if (i % 3 === 0) {
        document.write("<p>" + "Software" + "</p>")
    }
    else if (i % 5 === 0) {
        document.write("<p>" + "Developer" + "</p>")
    }
    else {
        document.write("<p>" + i + "</p>");
    }
}

