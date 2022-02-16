function printMultiplesOf3and5() {
    for(let value = 1; value <= 117; value++){
        if(value % 3 === 0 && value % 5 === 0){
            document.write("Software Developer");
            }else if(value % 3 === 0) {
                document.write("Software");
            }else if(value % 5 === 0){
                document.write("Developer");
                } else {
                    document.write(value);
        }
    }
}