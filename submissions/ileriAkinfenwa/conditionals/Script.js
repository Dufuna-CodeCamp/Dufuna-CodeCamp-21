"use strict";
// Challenge #1
const printNum = () => {
  for (let i = 1; i <= 116; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write("<h3>Software Developer</h3>");
    } else if (i % 3 === 0) {
      document.write("<h3>Software</h3>");
    } else if (i % 5 === 0) {
      document.write("<h3>Developer</h3>");
    } else {
      document.write(`<h3>${i}</h3>`);
    }
  }
};
printNum();