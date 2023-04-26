const btn = document.getElementsByClassName("cart")

const btn2 = document.getElementsByClassName("cart2")

const cartNav = document.getElementById("CartNav")


const addCartButton = (cal) =>{
    var a = []
for (let f = 0; f < btn.length; f++) { 
    a = a.concat([cal[f].innerHTML])
}
    for (let i = 0; i < cal.length; i++) {      
            cal[i].addEventListener("click",(e)=>{
                e.preventDefault()
                if(a[i]==="Add to cart"){
                    cal[i].textContent = "Remove"
                    a[i]= "Remove"
                    cartNav.style.display = "inline"      
                }else{
                    cal[i].textContent = "Add to cart"
                    a[i]= "Add to cart"
                    if(!a.includes("Remove")){
                        cartNav.style.display = "none"    
                    }
                }    
            })     
        }
      
      
}

addCartButton(btn)
addCartButton(btn2)


