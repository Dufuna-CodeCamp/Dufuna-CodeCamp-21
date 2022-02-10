const image = document.querySelectorAll('.image');
image.forEach(images =>{
    images.style.width = '220px';
    images.style.height = '300px';
})

function changeText0(){
    var buton0 = document.getElementById('button0')
    if (buton0.value == 'Add to cart'){
        buton0.value= "Remove";
        buton0.style.color = "blue";
        buton0.style.backgroundColor = "cream";
    } else {
        buton0.value = "Add to cart"
        buton0.style.color = "black"
        buton0.style.backgroundColor = "white";
    }   
}
function changeText1(){
    var buton1 = document.getElementById('button1')
    if (buton1.value == 'Add to cart'){
        buton1.value= "Remove";
        buton1.style.color = "blue";
        buton1.style.backgroundColor = "cream"
    } else {
        buton1.value = "Add to cart"
        buton1.style.color = "black"
        buton1.style.backgroundColor = "white"
    }   
}
function changeText2(){
    var buton2 = document.getElementById('button2')
    if (buton2.value == 'Add to cart'){
        buton2.value= "Remove";
        buton2.style.color = "blue";
        buton2.style.backgroundColor = "cream"
    } else {
        buton2.value = "Add to cart"
        buton2.style.color = "black"
        buton2.style.backgroundColor = "white"
    }   
}
function changeText3(){
    var buton3 = document.getElementById('button3')
    if (buton3.value == 'Add to cart'){
        buton3.value= "Remove";
        buton3.style.color = "blue";
        buton3.style.backgroundColor = "cream"
    } else {
        buton3.value = "Add to cart"
        buton3.style.color = "black"
        buton3.style.backgroundColor = "white"
    }   
}
function changeText4(){
    var buton4 = document.getElementById('button4')
    if (buton4.value == 'Add to cart'){
        buton4.value= "Remove";
        buton4.style.color = "blue";
        buton4.style.backgroundColor = "cream";
    } else {
        buton4.value = "Add to cart"
        buton4.style.color = "black"
        buton4.style.backgroundColor = "white"
    }   
}
function changeText5(){
    var buton5 = document.getElementById('button5')
    if (buton5.value == 'Add to cart'){
        buton5.value= "Remove";
        buton5.style.color = "blue";
        buton5.style.backgroundColor = "cream";
    } else {
        buton5.value = "Add to cart";
        buton5.style.color = "black";
        buton5.style.backgroundColor = "white";
    }   
}
const nav = document.getElementsByClassName('nav');
nav.forEach(nav=>{
    nav.style.backgroundColor = 'grey';
})
