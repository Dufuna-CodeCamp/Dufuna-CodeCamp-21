let headerLinks = document.querySelector(".header-links"),
    vendorItems = document.querySelectorAll(".vendor-item"),
    notify = document.querySelector(".header-link"),
    remove = "Remove";


vendorItems.forEach((item) => {
    item.childNodes[5].childNodes[1].addEventListener("click", () => {
        
        if (item.childNodes[5].childNodes[1].style.backgroundColor != "") {
            item.childNodes[5].childNodes[1].style.backgroundColor = "";
            notify.innerHTML = "<a href='#'>Cart</a>"
            item.childNodes[5].childNodes[1].style.border = "";
            item.childNodes[5].childNodes[1].innerHTML = "<p>Add to Cart</p>";
        } else {

            item.childNodes[5].childNodes[1].innerHTML =
                "<svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.5147 8.51472C3.85111 13.1783 3.85111 20.8217 8.5147 25.4853C13.1783 30.1489 20.8217 30.1489 25.4853 25.4853C30.1489 20.8217 30.1489 13.1783 25.4853 8.51472C20.8217 3.85113 13.1783 3.85113 8.5147 8.51472ZM23.4634 23.4634C19.9035 27.0233 14.0964 27.0232 10.5366 23.4634C9.11464 22.0415 8.25945 20.2516 7.98102 18.402L26.0189 18.402C25.7405 20.2516 24.8853 22.0415 23.4634 23.4634ZM26.009 15.588L7.98106 15.5979C8.25945 13.7484 9.11464 11.9585 10.5366 10.5366C14.0965 6.97673 19.9035 6.97673 23.4634 10.5366C24.8853 11.9585 25.7405 13.7286 26.009 15.588Z' fill='rgba(255, 255, 255, 1)' /></svg > <p style=' padding-left: 3px;'>" + remove + "</p>";
            item.childNodes[5].childNodes[1].childNodes[2].style.color = "rgba(255,255,255,1)"
            item.childNodes[5].childNodes[1].style.backgroundColor = "#A5A5A5";
            item.childNodes[5].childNodes[1].style.color = "rgba(255,255,255,1)";
            notify.innerHTML = "<a href='#'>Cart</a><div class='circle' style='border-radius: 50%; width: 9px; height: 9px; left: 1105px; top: 52px; background: #AD4C4C; color: #AD4C4C; box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);'></div>"
            item.childNodes[5].childNodes[1].style.border = "0px solid #ffffff";
        }

    });
});






