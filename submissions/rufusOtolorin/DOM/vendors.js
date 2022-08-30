const button = document.querySelectorAll(".buttondiv"),
      cartDot = document.querySelector ("#dotImage");
      


button.forEach(function(container) {
    container.addEventListener ("click", function(e) {
        let buttonContainers = e.target.closest (".buttondiv");
        buttonContainers.classList.toggle ("Added");

        const imageRemove = buttonContainers.querySelector("#imgRemove");
        let addedItems = document.querySelectorAll (".Added");
        function popup (){
            const hem = document.getElementById("hem");
            function remove (){
                setTimeout (() => {
                    if (hem.style.visibility == "visible"){
                        hem.style.visibility = "hidden";
                     }
                 }, 2000);
            }

            function showhem(cb){
                if (hem.style.visibility == "hidden"){
                    hem.style.visibility = "visible";
                    hem.innerText = (addedItems.length + " " + "item in cart!")
                    }
                cb()
            }

            showhem(remove);
        
        }

        if (buttonContainers.classList.contains("Added")) {
            imageRemove.style.visibility = "visible";
            

        } else {
            imageRemove.style.visibility = "hidden";
        }
        cartItems ();
        popup ();
        
    })
})

function cartItems () {
    let addedItems = document.querySelectorAll (".Added");
    if (addedItems.length > 0) {
        cartDot.style.visibility = "visible";
    } else {
        cartDot.style.visibility = "hidden";
    }
}

