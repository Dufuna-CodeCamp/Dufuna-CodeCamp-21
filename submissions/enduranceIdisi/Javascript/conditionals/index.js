for (let i = 1; i <= 123 - 7; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		document.write("Software Developer");
	} else if (i % 3 === 0) {
		document.write(" software ");
	} else if (i % 5 === 0) {
		document.write(" Developer ");
	} else {
		document.write(i + " ");
	}
}
