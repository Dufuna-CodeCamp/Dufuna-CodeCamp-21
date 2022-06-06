let positiveDiff = 123 - 7;
for (let i = 1; i <= positiveDiff; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    document.write('<p>' + "Software" + '</p>');
  }
  if (i % 5 === 0 && i % 3 !== 0) {
    document.write('<p>' + "Developer" + '</p>');
  }
  if (i % 5 === 0 && i % 3 === 0) {
    document.write('<p>' + "Software Developer" + '</p>');
  }
  if (i % 5 !== 0 && i % 3 !== 0) {
    document.write('<p>' + i + '</p>');
  }
}
