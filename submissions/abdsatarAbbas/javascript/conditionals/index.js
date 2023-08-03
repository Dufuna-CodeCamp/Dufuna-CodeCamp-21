let a = 123 - 7;

for (b = 1; b <= a; b++) {
	if (b % 3 === 0 && b % 5 === 0) {
        document.write("Software Developer" + " <br>");
	}
	else if (b % 3 === 0) {
        document.write("Software" + "  <br>");
	}
	else if (b % 5 === 0) {
        document.write ("Developer" + "  <br>");
	}
	else {
		document.write(b + "<br>")
	}
}