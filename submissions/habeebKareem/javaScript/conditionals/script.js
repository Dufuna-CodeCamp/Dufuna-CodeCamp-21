// program that prints the numbers from 1 and the positive difference between 7 and 123
for (let i = 1; i <= 116; i++) {

    // For numbers that are multiples of three (3)  and five (5)
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(`<p>Software Developer</p>`)
        console.log(i);
    
    // For numbers that are multiples of five (3)
    } else if ( i % 3 === 0) {
        document.write(`<p>Software</p>`)
        console.log(i);

    // For numbers that are multiples of three (5)  
    } else if ( i % 5 === 0 ) {
        document.write(`<p>Developer</p>`)
        console.log(i);       
    }
    
}
