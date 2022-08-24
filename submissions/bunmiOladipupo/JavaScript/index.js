var str = "<br/>";
for (var i = 1; i <= (123 - 7); i++){
    if (i % 3 == 0 && i % 5 == 0){
        document.write(str + 'Software Developer');
    } else if (i % 3 == 0){
        document.write(str + 'Software');
    } else if (i % 5 == 0){
        document.write(str + 'Developer');
    } else{
        document.write(str + i);
    }
}