let value;

for (let i =1; i<=116; i++) {
    let string ="";
    value = i;

    if (i % 3 === 0){
        string = "Software"
    }
    if (i % 5 === 0) {
        string = "Developer"
    }
    if (i % 3 ===0 && i % 5 ===0){
        string = "Software Developer"
    }
    value = (string) ? string : value;
    document.write(`<p>${value}</p>`)

    
}
