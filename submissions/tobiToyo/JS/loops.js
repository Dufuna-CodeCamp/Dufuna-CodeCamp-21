
// Positive difference between 7 and 123 is 123-7=116

for (let i = 1; i <= 116; i++) {

    if (i % 3 == 0 && i % 5 == 0 ){
        document.write(`Software Developer `);
    }
    else if (i % 3 == 0){
        document.write(`Software `);
    }

   else if (i % 5 == 0){
        document.write(`Developer `);
    }

    else {
        document.write(`${i} `);
    }
}