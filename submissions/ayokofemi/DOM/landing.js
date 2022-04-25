var userSelection = document.getElementById("location-list");
var errorBlock = document.querySelector(".error-message");
var choice1 = document.getElementById('choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3')
var choice4 = document.getElementById('choice4')

function Validate() {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "Please select your prefer location!"
        return false
    } else {
        errorBlock.innerHTML = "";
        return true;
    }
}

// function SubmitInput() {
//     return Validate();
// 

choice1.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

choice2.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

choice3.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

choice4.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})








