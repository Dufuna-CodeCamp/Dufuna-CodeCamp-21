var difference = 123-7;

for (let i = 0; i <=difference; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(` <p> Software Developer </p>`);
  } else if (i % 3 == 0) {
    document.write(` <p> software </p>`);
  } else if (i % 5 == 0) {
    document.write(` <p> Developer </p>`);
  }

  else{
    document.write(`<p> ${i} </p>`)
  }
}