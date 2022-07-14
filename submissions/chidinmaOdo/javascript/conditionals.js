// positive difference between 7 and 123
let diff = 123 - 7;

//loop statement
 for (i = 1; i <= diff; i++){
    //conditions to be fulfilled using the if and else if statement
    //Numbers that are multiples of three(3)
    if(i % 3 === 0){
        document.write(`Software <br>`);

        //Numbers that are multiples of five (5)
    } else if(i % 5 === 0){
        document.write(`Developer  <br>`);

        //Numbers that are multiples of three(3) and five(5)
    } else if (i % 3 === 0 && i % 5 === 0){
        document.write(`Software Developers <br>`);

        //Numbers that are not multiple of three and five
    } else {
        document.write(`${i} <br>`);
    }
 }

