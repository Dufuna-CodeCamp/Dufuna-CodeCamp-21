let errorMessage = document.querySelector('.error-message'),
    container = document.querySelectorAll('.food'),
    input = document.querySelector("#input");

input.addEventListener("change", function(e){
    if(!(e.target.value === "")){
        myItemImage();
        errorMessage.textContent ="";
    } else {
        errorMessage.textContent = "Please Provide a location";
        defaultImages();
    }
});

function myItemImage(){
    let images;
    for(let i = 0; i < container.length; i++){
        container[i].style.cursor = 'pointer';
        container[i].addEventListener('click', function(){
            window.location.href = "../HTML/foodbag-vendors-page.html";
        });
        images = container[i].getElementsByTagName("img")[0];

        //change images
        let imageChange = [];
        imageChange.push(images.getAttribute("src").split("_"));
        for (let x = 0; x < imageChange.length; x++) {
            imageChange[x].pop();
            let imageReturn = imageChange[x] + ".svg";
            images.src = imageReturn;
        }
    
        //Text Color Change
        let toggle = container[i].getElementsByTagName("img")[0].nextElementSibling;
        let foodInfo = toggle.nextElementSibling;
        foodInfo.style.color = "#AD4C4C";
        if(toggle.classList.contains("gray")){
            toggle.classList.remove("gray");
            toggle.classList.add("red");
        } else{
            toggle.classList.add("gray");
        }
    }
    
}

function defaultImages(){
    let images;
    for (let i = 0; i < container.length; i++) {
        container[i].style.cursor = "auto";
        container[i].addEventListener("click", function (){
            window.location.href = "";
        });
        images = container[i].getElementsByTagName("img")[0];

    
        let imageChange = [];
        imageChange.push(images.getAttribute("src").split("."));
        for (let x = 0; x < imageChange.length; x++) {
        imageChange[x].pop();
        let imageReturn = ".." + imageChange[x].join("") + "_disabled.svg";
        images.src = imageReturn;
        }
        //Text Color Change
        let toggle = container[i].getElementsByTagName("img")[0].nextElementSibling;
        let foodInfo = toggle.nextElementSibling;
        foodInfo.style.color = "#A5A5A5";
    }
}



