const numbers = 123 - 7;
for (i = 1; i <= numbers; i++) {
    let toWrite = "";
    if (i % 3 === 0 && i % 5 === 0) {
        toWrite += "Software Developer"
    } else if (i % 5 === 0) {
        toWrite += "Software";
    } else if (i % 3 === 0) {
        toWrite += "Developer"
    } else {
        toWrite += i;
    }
    document.write("<p>" + toWrite + "</p>");
}

