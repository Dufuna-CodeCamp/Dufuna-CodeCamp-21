const positivediff = 123-7;

for(let i=1; i <= positivediff; i++) {

    let message = "";
    if  (i % 3 == 0 && i % 5 == 0)  {
        message = "Software Developer";
    }

    else if ( i % 5 == 0) {
        message = "Developer";
    }

    else if (i % 3== 0) {
        message = "Software";
    }

    else {
        message = i;
    }

    document.write("<p>"+ message + "</p>" );
}