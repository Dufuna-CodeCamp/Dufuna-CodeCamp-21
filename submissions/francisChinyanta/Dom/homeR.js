const locationAddress = document.getElementById("address")
const foods = document.querySelector(".foods");
//console.log(foods);

locationAddress.addEventListener("change", e =>{
    //console.log(e.target.value.length);
    let inPut = e.target.value.length

   
    if(inPut > 0){
         //console.log(inPut);
         foods.classList.remove("disabledInput");
         foods.classList.add("activeButtons");
    }

    
})
