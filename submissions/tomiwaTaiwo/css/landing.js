const locationSelect = document.getElementById("location")

function changeImages(){
            const img1 = document.getElementById("img-1")
            const img2 = document.getElementById("img-2")
            const img3 = document.getElementById("img-3")
            const img4 = document.getElementById("img-4")
            img1.src="./image/fast-food.svg"
            img2.src="./image/Vegetables & Drinks.svg"
            img3.src="./image/Drinks & Cocktails.svg"
            img4.src="./image/resturant.svg"
            img1.style.pointerEvents = "auto"; 
            img2.style.pointerEvents = "auto"; 
            img3.style.pointerEvents = "auto"; 
            img4.style.pointerEvents = "auto"; 

}

locationSelect.addEventListener("change", ()=>{
    if(locationSelect.value !== ""){
        changeImages()
    }
})


