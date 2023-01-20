let number = 123 - 7
// document.write(number)

for(let i = 1; i <= number; i++){
    // multiples of three (3)
    if(i % 3 === 0 && i % 5 === 0){
        document.write("Software Developer" + "<br>")
    }
    // multiples of five (5)
    else if(i % 3 === 0){
        document.write("Software" + "<br>")
    }
    // multiples of three (3) and five (5)
    else if(i % 5 === 0){
        document.write("Developer" + "<br>")
    }
    else{
        document.write(i + "<br>")
    }   
}


