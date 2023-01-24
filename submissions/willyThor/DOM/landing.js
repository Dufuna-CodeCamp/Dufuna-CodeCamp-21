let image2 = ["../images/fast-food.svg", "../images/Vegetables _ Drinks.svg", "../images/Drinks _ Cocktails.svg", "../images/resturant.svg"];
let t = document.getElementById("address-list");
let img1 = document.querySelectorAll("#img1");
let interest = document.querySelectorAll("#interest");
let img = document.querySelectorAll("#img");



function validateLocation() {
    for(i=0; i<img1.length; i++){
    img1[i].src = image2[i];
    //img1[i].style.cursor = "pointer";
    interest[i].style.color = "#AD4C4C";
    }

    for (let j = 0; j < img.length; j++) {
       img[j].onclick = () => location.href = "vendors.html", "_blank";
       img[j].style.cursor = "pointer";   
    
    }
    //img[i].onclick = () => location.href = "vendors.html";
}
t.addEventListener('change', validateLocation);



