let addToCart = document.querySelectorAll(".addtocart")

addToCart.forEach((button) => {
  button.addEventListener('click', cartButtonClick)
})

function cartButtonClick(){
  let check = this.innerHTML
  if(check == "Add to Cart"){
    this.innerHTML = '<img src="../imgs/remove.svg" style="width: 30%;"/> Remove'
    document.getElementById('cart-notify').style = 'height: 8px; width: 8px; background-color: #ad4c4c; border-radius: 50%; display: inline-block';
    this.style = "background-color: silver; color: rgba(255, 255, 255, 1); border: 1px solid #fff; display: flex; justify-content: center; align-items: center; margin-top: 10px; border-radius: 2px; font-weight: bold;";
    this.classList.remove('button');
  } else if (check.includes('Remove') == true){
    this.innerHTML = "Add to Cart";
    this.style = "background-color: white; color: #ad4c4c; border: 1px solid #ad4c4c"
    this.classList.add('button');       
  } else{
    return false;
  }

  clean()
}
 
function clean(){
  let cart1 = document.getElementById("addtocart1").innerHTML;
  let cart2 = document.getElementById("addtocart2").innerHTML;
  let cart3 = document.getElementById("addtocart3").innerHTML;
  let cart4 = document.getElementById("addtocart4").innerHTML;
  let cart5 = document.getElementById("addtocart5").innerHTML;
  let cart6 = document.getElementById("addtocart6").innerHTML;
  let cart7 = document.getElementById("addtocart7").innerHTML;
  let cart8 = document.getElementById("addtocart8").innerHTML;
  if ((cart1 == 'Add to Cart') && (cart2 == 'Add to Cart') && (cart3 == 'Add to Cart') && (cart4 == 'Add to Cart') && (cart5 == 'Add to Cart') && (cart6 == 'Add to Cart') && (cart7 == 'Add to Cart') && (cart8 == 'Add to Cart')){
      document.getElementById('cart-notify').style = '';
  }
}



