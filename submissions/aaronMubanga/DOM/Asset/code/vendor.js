const   removeImg = new Image();
        removeImg.src = "../Asset/images/remove.svg";
        cartBtn = document.getElementById('cart');
        addCartbtns = document.querySelectorAll('.btn');
;

function addItem() {
    let picker = document.querySelectorAll('.remove-item');
        itemPopup = document.getElementById('newItem');
    if (picker.length >= 1) {
        itemPopup.style.display = 'inline-block';
    } else {
        itemPopup.style.display = 'none';
    }
}        

addCartbtns.forEach(addCartbtn => {
    addCartbtn.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(addCartbtn);
       if (addCartbtn.textContent === "Add to Cart") {
           addCartbtn.classList.add("remove-item");
           addCartbtn.classList.remove("cartadd");
           addCartbtn.innerHTML = '<img height="22px" width="22px" src="' + removeImg.src+'" />' + "remove";

       }else{
           addCartbtn.classList.add("cartadd");
           addCartbtn.classList.remove("remove-item");
           addCartbtn.innerHTML = "Add to Cart";
           itemPopup.style.display ='none';
       }
       addItem();
    })
})

