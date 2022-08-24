
let numbers = "";
for (let i = 1; i <= 123-7; i++) {
    let print = "";
    if (i % 3 == 0 && i % 5 == 0) {
        print += "Software Developer";
    } else if (i % 3 == 0) {
        print += "Software";
    } else if ( i % 5 == 0) {
        print += "Developer";
    } else {
        print += i;
    }
    document.write("</br>" + print + "</br>");
}

