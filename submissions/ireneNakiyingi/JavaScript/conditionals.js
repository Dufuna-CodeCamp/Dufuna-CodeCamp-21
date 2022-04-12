var figure = []
var diff = (123-7);
for (var num =1; num<=diff ;num++ ) {
    if (num%3 ===0 && num%5===0){
        console.log (num + 'software developer');
        document.write('Software Developer' + '<br>')
        
    }
    else if (num%3 === 0 ){
        console.log( num + 'software');
        document.write('Software' + '<br>')
    }
    else if (num%5 === 0){
        console.log (num + 'developer');
        document.write('Developer' + '<br>')
    }   
}

