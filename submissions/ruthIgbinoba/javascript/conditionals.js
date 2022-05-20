let i;
let diff = 123 - 7;

for (i = 1; i <= diff; i++) {
    if (i % 15 === 0) {
        document.write(`Software Developer <br>`);
    } else if (i % 3 === 0) {
        document.write(`Software <br>`);
    } else if (i % 5 === 0) {
        document.write(`Developer <br>`);
    } else {
        document.write(`${i} <br>`);
    }
}
