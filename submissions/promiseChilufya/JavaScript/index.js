var positiveDifference = 123 - 7;

    for (let i = 1; i <= positiveDifference; i++){
        if (i % 3 === 0 && i % 5 === 0){
            document.write("Software Developer");
        } else if (i % 3 === 0){
            document.write("Software");
        } else if (i % 5 === 0){
            document.write("Developer");
        } else {
            document.write("i");
        }
    }
