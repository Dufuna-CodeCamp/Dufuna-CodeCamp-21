//Positive Difference Between 123 and 7
let diff = 123 - 7;

for(i = 1; i <= diff; i++){

    //when i is a multiple of both 3 and 5
    if(i % 3 === 0 && i % 5 === 0){
        document.write(`Software Developer <br>`);
    
    // when i is a multiple of 3 only
    } else if(i % 3 === 0){
        document.write(`Software <br>`);

    //when i is a multiple of 5 only
    } else if(i % 5 === 0){
        document.write(`Developer <br>`);

    //when i i sneither a multiple of 3 nor 5
    } else {
        document.write(`${i} <br>`)
    }

}