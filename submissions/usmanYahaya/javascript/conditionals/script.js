var difference = Math.abs(7 - 123);

for (let i = 1; i <= difference; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(' <br> Software Developer<br>')
    } else if (i % 5 === 0) {
        document.write('Developer <br>')
    } else if (i % 3 === 0) {
        document.write('Software')
    } else {
        document.write(i + '<br>')
    }

}
