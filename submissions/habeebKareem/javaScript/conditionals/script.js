// // program that prints the numbers from 1 and the positive difference between 7 and 123
// for (let i = 1; i <= 116; i++) {

//     // For numbers that are multiples of three (3)  and five (5)
//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write(`<p>Software Developer</p>`)
    
//     // For numbers that are multiples of five (3)
//     } else if ( i % 3 === 0) {
//         document.write(`<p>Software</p>`)

//     // For numbers that are multiples of three (5)  
//     } else if ( i % 5 === 0 ) {
//         document.write(`<p>Developer</p>`)     
//     }   
// }

const maxNumber = 123 - 7;

for (let i = 1; i <= maxNumber; i++) {
    let toWrite = "";
    if (i % 3 == 0) {
        toWrite += " Software";
    }
    if (i % 5 == 0) {
        toWrite += " Developer";
    }
    if (i % 5 != 0 && i % 3 != 0) {
        toWrite += i;
    }
    document.write("<p>" + toWrite + "</p>");
}
