const positiveDifference = 123 - 7;

for ( let count = 1; count <= positiveDifference; count++){

if( count % 3 ===0 && count % 5 ===0){
    document.write("Software Developer")
}
else if (count % 3 ===0){
    document.write("Software")
}
else if( count % 5 ===0){
    document.write("Developer")
}

else{
    document.write(count);
}
console.log(count);

}

done()