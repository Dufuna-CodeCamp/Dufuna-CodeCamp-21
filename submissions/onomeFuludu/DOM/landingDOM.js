var userSelection = document.getElementById("select-state");
var errorBlock = document.querySelector(".error-block");
var submitForm = document.getElementById('submitForm')
var submitForm1 = document.getElementById('submitForm1')
var submitForm2 = document.getElementById('submitForm2')
var submitForm13 = document.getElementById('submitForm3')

function Validate() {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "Please select your prefer location!"
        return false
    } else {
        errorBlock.innerHTML = "";
        return true;
    }
}

function SubmitInput() {
    return Validate();
}

submitForm.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

submitForm1.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

submitForm2.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

submitForm3.addEventListener('click', () => {
    if (userSelection.value == "") {
        errorBlock.innerHTML = "please select your prefer location"
        return false;
    } else {
        location.href = "./vendor.html";
        return true;
    }
})

submitForm.addEventListener('click', SubmitInput);
submitForm1.addEventListener('click', SubmitInput);
submitForm2.addEventListener('click', SubmitInput);
submitForm3.addEventListener('click', SubmitInput);

