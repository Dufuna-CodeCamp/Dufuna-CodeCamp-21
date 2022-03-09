
let interest = document.querySelector('.interest');

interest.addEventListener("click", function() {

window.location.assign("../HTML/Vendors-Page.html");

});

let locationSelector = document.querySelector('select');

locationSelector.onchange = HandleFunction;

function HandleFunction() {

    if(locationSelector.length>0) {
        
        document.querySelector('.interest').style.cursor= "pointer";
     }

    }
  


