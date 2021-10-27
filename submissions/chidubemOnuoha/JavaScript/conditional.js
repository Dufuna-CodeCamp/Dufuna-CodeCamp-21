function multiplyFunc() {
    let innitialCount = 1;
    let mainCount = 7;
    let endCount = 123;

     let posiDeff = endCount - mainCount
    
    for(let counter = innitialCount ; counter <= posiDeff ;counter++) {
        if(counter === 3) {
          document.write('<br> Software instead of the number')
        } else if (counter === 5) {
            document.wwrite(' <br> Developr instead of the number</h1>')
        } else if (counter === 3 && counter === 5) {
             document.write('<br> Software Developer </h1>')
        } 
    }
}

multiplyFunc()