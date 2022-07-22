var difference = Math.abs(7 - 123);
console.log(difference)

for (let i = 1; i <= difference; i++) {
    if (i % 3 === 0) {
        document.write(' <br> Software <br>')
    } else if (i % 5 === 0) {
        document.write('<br> Developer <br>')
    } else if (i % 3 === 0 && i % 5 === 0) {
        document.write('Software Developer')
    } else {
        document.write(i + '<br>')
    }

}