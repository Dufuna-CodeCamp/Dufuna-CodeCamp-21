// conditions => i % 3, i % 5, i % 3 && i % 5
const num = 123 - 7;

for (let i = 1; i <= num; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		document.write('<p>Software Developer</p>');
	} else if (i % 3 === 0) {
		document.write('<p>Software</p>');
	} else if (i % 5 === 0) {
		document.write('<p>Developer</p>');
	} else {
		document.write(`<p>${i}</p>`);
	}
}
