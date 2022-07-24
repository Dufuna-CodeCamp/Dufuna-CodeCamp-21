<<<<<<< HEAD
let removeBtn = document.querySelectorAll(".remove-btn");
=======
let btn = document.querySelectorAll(".btn");
>>>>>>> 14b4fd634414df0831d7e180cc207ee2fae94db6
    notify = document.querySelector("#special");



// Loops through all the link tags on the page
<<<<<<< HEAD
removeBtn.forEach(eval => {
    var btn = eval;
    
    eval.addEventListener("click", (eval) => {
        eval.preventDefault();
=======
btn.forEach(e => {
    var btn = e;
    
    e.addEventListener("click", (e) => {
        e.preventDefault();
>>>>>>> 14b4fd634414df0831d7e180cc207ee2fae94db6
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