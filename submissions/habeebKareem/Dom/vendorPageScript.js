let addBtn = document.querySelectorAll("#cart-btn"),
    badge = document.querySelector(".badge");

// Allow the use of forEach on an HTMLCollection
NodeList.prototype.forEach = Array.prototype.forEach;

// Loops through all the link tags on the page
addBtn.forEach(el => {
    var btn = el;
    
    el.addEventListener("click", (el) => {
        el.preventDefault();
        if (btn.innerHTML=="Add to Cart") {
             // changes button text
            btn.innerHTML= `Remove`;
            btn.style.color = "#ffffff";
            // changes the id attribute for the link tag
            btn.setAttribute("id", "removebtn");
            
            // removes the hidden attribute on the badge/notification dot
            badge.removeAttribute("hidden");
            
        } else {
            // changes button text
            btn.innerHTML="Add to Cart"
            // changes the id attribute for the link tag
            btn.setAttribute("id", "cart-btn");
            
            // adds the hidden attribute on the badge/notification dot
            badge.setAttribute("hidden", "hidden"); 
        }
    })
})