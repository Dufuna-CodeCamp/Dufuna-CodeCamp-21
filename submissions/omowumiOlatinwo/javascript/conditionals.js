
const numb = 123 - 7;
for (i = 1; i <= numb; i++) {
    let numWord = "";
    if (i % 3 === 0 && i % 5 === 0) {
        numWord += "Software Developer"
    } else if (i % 5 === 0) {
        numWord += "Developer";
    } else if (i % 3 === 0) {
        numWord += "Software"
    } else {
        numWord += i;
    }
    document.write(numWord + "<br>");
}