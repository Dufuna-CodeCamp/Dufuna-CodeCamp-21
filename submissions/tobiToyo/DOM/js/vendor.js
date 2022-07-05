// GET THE BUTTONS
let buttons = document.getElementsByClassName("vendor-grid-button");
console.log(buttons);

const clickButton = (e) => {
    console.log("added to cart");
    e.target.style.backgroundColor = "#A5A5A5";
    e.target.style.color = "white";
    // e.target.innerHTML = 
    console.log(e.target); 
    console.log(e);
    console.log(e.target.innerHTML);
}


// ADD A CLICK EVENT

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButton);
}



