let positive = 123 - 7;

for (let i = 1; i <= positive; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write(`Software Developer <br><br>`);
  } else if (i % 5 === 0) {
    document.write(`Developer <br><br>`);
  } else if (i % 3 === 0) {
    document.write(`Software <br><br>`);
  } else {
    document.write(`${i} <br><br>`);
  }
}