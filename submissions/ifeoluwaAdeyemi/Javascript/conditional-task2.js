const value = 123 - 7;

for (let i = 1; i <= value; i++) {
    let writeNumber = "";
    if (i % 3 == 0) {
        writeNumber += " Software";
    }
    if (i % 5 == 0) {
        writeNumber += " Developer";
    }
    if (i % 5 != 0 && i % 3 != 0) {
        writeNumber += i;
    }
    document.write("<p>" + writeNumber + "</p>");
}
