const   img = new Image();
        img.src = "../Assets/images/remove.svg";
        itemNotification = document.getElementById("newItem");
        addToCarts = document.querySelectorAll('.add-item');

    function notify () {
        let picker = document.querySelectorAll(".added");
        if (picker.length >= 1) {
            itemNotification.style.display = "inline-block";
        } else {
            itemNotification.style.display = "none";
        }
    }

    addToCarts.forEach(element => {
        element.addEventListener("click", () => {
            if (element.textContent === "Add to Cart") {
                element.classList.remove ("border-btn");
                element.classList.add ("added");
                element.innerHTML = '<img height="20px" width="20px" src="'+img.src+'"/>' + "Remove";
            } else {
                element.classList.add ("border-btn");
                element.classList.remove ("added");
                element.innerHTML = "Add to Cart";
                itemNotification.style.display = "none";
            }
            notify();
        })
    });
