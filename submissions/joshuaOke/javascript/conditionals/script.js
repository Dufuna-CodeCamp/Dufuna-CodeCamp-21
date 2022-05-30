const maxNumber = 123 - 7;

for (let i = 1; i <= maxNumber; i++) {
    let toWrite = "";
    if (i % 3 == 0) {
        toWrite += " Software";
    }
    if (i % 5 == 0) {
        toWrite += " Developer";
    }
    if (i % 5 != 0 && i % 3 != 0) {
        toWrite += i;
    }
    document.write("<p>" + toWrite + "</p>");
}
