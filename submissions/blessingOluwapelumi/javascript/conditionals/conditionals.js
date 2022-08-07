for (let i = 0; i < 173; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(`Software Developer <br><br>`);
  } else if (i % 3 == 0) {
    document.write(`software <br><br>`);
  } else if (i % 5 == 0) {
    document.write(`Developer <br><br>`);
  }

  else{
    document.write(`${i} <br><br>`)
  }
}
