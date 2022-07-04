//POSITIVE DIFFERENCE BETWEEN 123 & 7 IS 116

var num = 116;

for (let i = 1; i <= num; i++) {

    if(i % 3 == 0 && i % 5 == 0){
        document.write(" " + "Software developer" + '</br>');
    }
       else if (i % 3 == 0) {
        document.write(" " +"Software"+ '</br>');
    }

    else if(i % 5 == 0){
        document.write( " " +"Developer"+ '</br>');

    }
    
    else {
        document.write(" " + i +'</br>' );
    }
    
}