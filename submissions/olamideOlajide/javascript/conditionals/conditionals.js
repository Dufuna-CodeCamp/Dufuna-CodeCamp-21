const positiveDiff = 123 - 7;

for (let i = 1; i <= positiveDiff; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write(`<p>Software Developer</p>`);
  } else if (i % 3 === 0) {
    document.write(`<p>Software</p>`);
  } else if (i % 5 === 0) {
    document.write(`<p>Developer</p>`);
  } else {
    document.write(`<p>${i}</p>`);
  }
}
