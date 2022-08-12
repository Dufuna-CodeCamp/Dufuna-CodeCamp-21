let button = document.querySelectorAll(".btn"),
disp = document.querySelector('#notif_img');

button.forEach( value =>(
    value.addEventListener('click', (event) =>{
        let buttonClick = event.target.closest('.btn')
        buttonClick.classList.toggle('add')
        let icon = buttonClick.querySelector('#rm')
        
        if (buttonClick.classList.contains("add")) {
            buttonClick.querySelector("#added").innerText = "Remove";
            buttonClick.querySelector("#added").style.color = 'white';
            icon.style.visibility = "visible";
            buttonClick.setAttribute('style','background: gray; border: 2px solid gray;');
        }
        else {
            icon.style.visibility = "hidden";
            buttonClick.querySelector("#added").innerText = "Add to Cart";
            buttonClick.querySelector("#added").style.color = 'crimson';
            buttonClick.style.backgroundColor = "white";
            buttonClick.setAttribute('style', 'background: white; border: 2px solid crimson;');
        }
        notify(); 
    })
))

let notify = () => {
    let inform = document.querySelectorAll('.add');
    if(inform.length>0) {
        disp.style.visibility = 'visible';
    }
    else {
        disp.style.visibility = "hidden";
    }
}



