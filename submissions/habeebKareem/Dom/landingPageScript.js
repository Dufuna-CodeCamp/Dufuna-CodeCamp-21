let interests = document.querySelectorAll(".card-img-int"),
interestItems = document.getElementsByClassName("interest-items"),
interestTitle = document.getElementsByClassName("interest-title"),
interestText = document.getElementsByClassName("interest-text");

// Allow the use of forEach on an HTMLCollection
HTMLCollection.prototype.forEach = Array.prototype.forEach;

clickableInterest = () => {
    var inputLocation = document.getElementById("location").value;
    var locationOpts = document.getElementById("locations").childNodes;
    for (var i = 0; i < locationOpts.length; i++) {
        if (locationOpts[i].value === inputLocation) {
          // An item was selected from the list!
            interests.forEach(interest => {
                let hidden = interest.getAttribute("hidden");
                if (hidden) {
                    interest.removeAttribute("hidden");
                } else {
                    interest.setAttribute("hidden", "hidden");
                } 
            });  
        }
    }
    // Set the color interest title
    interestTitle.forEach(title => {
        title.style.color = "#AD4C4C";
    });
    interestText.forEach(text => {
        text.style.color = "#696969";
    });
    // customer selects an interest, the customer should be redirected to the Vendor page.
    interestItems.forEach(element => {
        element.onclick = () => (window.location.href = "../HTML/vendor-page.html");
    });
}