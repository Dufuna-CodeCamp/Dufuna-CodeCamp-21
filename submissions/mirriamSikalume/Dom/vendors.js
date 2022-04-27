
const button = document.querySelectorAll('.container-add-to-cart')
const notification = document.querySelector('#notification')



button.forEach( value => (
  
    value.addEventListener("click", function(e){

        let clickedButtonContainer = e.target.closest(".container-add-to-cart")
        clickedButtonContainer.classList.toggle("Added")

        console.dir(clickedButtonContainer);

        const removeImage = clickedButtonContainer.querySelector('#remove-image')

        if(clickedButtonContainer.classList.contains("Added")) {
            
             clickedButtonContainer.querySelector("#add-to-cart").innerText = "Remove"
             clickedButtonContainer.style.color = "white"
             removeImage.style.visibility = "visible"
             clickedButtonContainer.classList.add("grey")
        } else {

            removeImage.style.visibility = "hidden"
            clickedButtonContainer.querySelector("#add-to-cart").innerText = "Add to Cart"
            clickedButtonContainer.style.color = "rgb(201, 44, 44)"
            clickedButtonContainer.classList.remove("grey")
        }

        showNotification();
    })

   
    
))

function showNotification() {

    let show = document.querySelectorAll(".Added");

    if(show.length>0) {

       notification.style.visibility = "visible"

    } else {

        notification.style.visibility = "hidden"
    }
}