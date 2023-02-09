var difference = 123-7;

for (let i = 1; i <=difference; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(` <br> Software Developer <br>`);
  } else if (i % 3 == 0) {
    document.write(` <br> software <br>`);
  } else if (i % 5 == 0) {
    document.write(` <br> Developer <br>`);
  }
  else{
    document.write(`<p> ${i} </p>`)
  }
}