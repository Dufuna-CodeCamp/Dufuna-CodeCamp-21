let btn = document.querySelectorAll(".btn");
    notify = document.querySelector("#special");



// Loops through all the link tags on the page
btn.forEach(el => {
    var btn = el;
    
    el.addEventListener("click", (el) => {
        if (btn.innerHTML=="Add to Cart") {
             // changes button text
            btn.innerHTML= `Remove`;
            btn.style.color = "#A5A5A5";   
             // removes the hidden attribute on the special
            notify.innerHTML = "<div class='circle' style='border-radius: 50%; width: 9px; height: 9px; left: 1105px; top: 52px; background: #AD4C4C; color: #AD4C4C; box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);'></div>"
            special.removeAttribute("hidden");
            
        } else {
            // changes button text
            btn.innerHTML="Add to Cart"; 
            btn.style.color = "#AD4C4C";
            // changes the id attribute for the link tag
            notify.innerHTML = ""; 
            special.setAttribute("hidden", "hidden"); 
        }
    })
})