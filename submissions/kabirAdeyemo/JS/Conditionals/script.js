// positive difference between 7 & 123
let positiveNumber = 123 - 7;

// looping through number
for (let i = 1; i <= positiveNumber; i++) {
	if ( (i % 5 === 0) && (i % 3 === 0)) {
		document.write("Software Developer <br>");
	} else if (i % 5 === 0) {
		document.write("Developer <br>");
	} else if (i % 3 === 0) {
		document.write("Software <br>");
	} else {
		document.write(`${i} <br>`);
	}
}