
      notification = document.querySelector("#notification");

      document.querySelectorAll(".button-collection").forEach(function (index) {
        index.addEventListener("click", function (val) {
        let Container = val.target.closest(".button-collection")
         Container.classList.toggle("added")
        console.dir(Container)
        let removeImageFromContainer = Container.querySelector(".remove")

        
    
        if (Container.classList.contains("added")) {
            removeImageFromContainer.style.visibility = "visible"
            Container.querySelector(".add-to-cart").innerText = "Remove"
            Container.classList.add("grey");
        }
        
        else {
            removeImageFromContainer.style.display = "none"
            Container.classList.remove("grey");
            Container.querySelector(".add-to-cart").innerText = "Add to Cart"
        }

       implementItemsAdded();
    })
})

function implementItemsAdded() {
    let item = document.querySelectorAll(".added")
    
    if (item.length > 0) {
        notification.style.visibility= "visible"
    }

    else {
        notification.style.visibility = "hidden";
    }
}