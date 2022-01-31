let number = 123 - 7;

for (let i = 1; i <= number; i++) {
  let toWrite = "";
  if (i % 3 === 0 && i % 5 === 0) {
    toWrite += "Software Developer";
  } else if (i % 5 === 0) {
    toWrite += "Developer";
  } else {
    if (i % 3 === 0) {
      toWrite += "Software";
    } else {
      toWrite += i;
    }
  }

  document.write("<p>" + toWrite + "</p>");
}
