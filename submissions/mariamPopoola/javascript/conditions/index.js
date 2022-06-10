let postiveDifference = 123 - 7;

for (let i= 1; i<= postiveDifference; i++){

    if (i % 3 === 0 && i % 5 === 0){
        document.write((i) + " "+ "Software Developer" + "<br>");
    }
    else if (i % 3 == 0 ){
        document.write((i) + " "+ "Developer" + "<br>");
    } 
    else if (i % 5 == 0 ){
        document.write((i) + " "+ "Software"  + "<br>");
    } 
    else {
        document.write("<br>"); 
    }
}


