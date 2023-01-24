var select = document.querySelector('select');

var box1 = document.getElementsByClassName("box1")

var box1Img1 = document.getElementsByClassName("img1")

var box1Img2 = document.getElementsByClassName("img2")

var firstTitle = document.getElementsByClassName("firstTitle")

 //DEFAULT VALUE    [IMG1 APPEARS, IMG2 IS INVISIBLE]
if (select.selectedIndex === 0) {

   
    for (let i = 0; i < box1Img1.length; i++) {
        box1Img1[i].style.display = "block";

    }
    for (let i = 0; i < box1Img2.length; i++) {
        box1Img2[i].style.display = "none";
    }
}

    //ADDED EVENTLISTENER TO SELECT
    select.addEventListener('click', function () {

    if (select.selectedIndex >= 1) {

        //WHEN I CLICK ON A LOCATION, IMAGE 1 DISAPPEAR, HIGHLIGHTED IMAGE 2 APPEAR
        for (let i = 0; i < box1Img1.length; i++) {
            box1Img1[i].style.display = "none";

        }
        for (let i = 0; i < box1Img2.length; i++) {
            box1Img2[i].style.display = "block";
        }
    }

    // IT REVERTS BACK TO IMAGE 1
    else {

        for (let i = 0; i < box1Img1.length; i++) {
            box1Img1[i].style.display = "block";

        }
        for (let i = 0; i < box1Img2.length; i++) {
            box1Img2[i].style.display = "none";

        }

    }

});

//ADDED EVENT LISTENER TO SELECT, TO TOGGLE THE TITLE COLOR WHEN I CLICK ON A LOCATION

select.addEventListener('click', function () {

    if (select.selectedIndex >= 1) {
        for (let i = 0; i < firstTitle.length; i++) {
            firstTitle[i].classList.toggle("toggleTitle")
            firstTitle[i].style.color ="#ad4c4c"

        }
    //ADDED HOVER TO THE BOXES WHEN HIGHLIGHTED    
        for (let i = 0; i < box1.length; i++) {
            box1[i].classList.toggle("boxes")
        
            
        }
    }


});