// positive difference between 7 & 123
let number = 123 - 7;

// looping through number
for (let i = 1; i <= number; i++) {
	if ( (i % 5 === 0) && (i % 3 === 0)) {
		document.write("Software Developer <br><br>");
	} else if (i % 5 === 0) {
		document.write("Developer <br><br>");
	} else if (i % 3 === 0) {
		document.write("Software <br><br>");
	} else {
		document.write(`${i} <br>`);
	}
}
