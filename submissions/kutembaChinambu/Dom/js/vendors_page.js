console.log("i have loaded");
var vendoroptions = document.querySelectorAll(".vendoroptions");
        for (let i = 0; i < vendoroptions.length; i++){
            vendoroptions[i].addEventListener('click', addCart);
           // console.log (vendoroptions[i]);
        }

//function that loads the vendors page when an interest list item is loaded
function addCart() {
    console.log("wow")
    //window.location = "landing_page.html";
}