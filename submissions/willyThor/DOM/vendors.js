let add = document.querySelectorAll(".add"),
    remove = document.querySelectorAll("#remove"),
    notifyDot = document.querySelector("#dot");

let cartNum = 0;
function notify() {
  if (cartNum > 0) {
    
    notifyDot.style.display = "inline-flex";
  } else {
    notifyDot.style.display = "none";
  }
}



  for(i = 0; i < add.length; i++) {
    add[i].onclick = (e) => {
      cartNum += 1;
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "inline-flex";
      console.log(cartNum);
      notify();
  }
}


for(i = 0; i <remove.length; i++){
  remove[i].onclick = (e) => {
    cartNum -= 1;
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "inline-flex";
    console.log(cartNum);
    notify();
  }
}


  

 