var numbers = 123 - 7;

for (let i = 1; i <= numbers; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write('<p>Software Deveoper</p>');
    } else if (i % 5 == 0) {
        document.write('<p>Developer</p>');
    } else if (i % 3 == 0) {
        document.write('<p>Software</p>');
    } else {
        document.write(`<p>${i}</p>`);
    }
}

