let possitiveDifference = 123 - 7;
for (let i = 1; i <= possitiveDifference; i++) {
  // Check if the number is a multiple of 3
  if (i % 3 === 0) {
    document.write("Software");
    document.write("</br>");

    // Check if the number is a multiple of 5
  } else if (i % 5 === 0) {
    document.write("Developer");
    document.write("</br>");

    // Check if the number is a multiple of 3 and 5
  } else if (i % 3 === 0 && i % 5 === 0) {
    document.write("Software Developer");
  } else {
    document.write(i);
    document.write("</br>");
  }
}
