let locationInput = document.querySelector(".location"),
    interestInput = document.querySelector(".interest"),
    errorInput = document.querySelector(".error-section"),
    userLocation = document.getElementById("location-list"),
    interestContainer = document.querySelector(".interest-container")

function required(field, event) {
    if (field.target.value === '') {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        console.log(field.target.value)
        field.target.nextElementSibling.innerHTML = "";
        return true;
    }

}

function validateData(e) {

    userLocation.addEventListener('change', (fieldValue) => {

        fieldValue = e.target.value;

        if (fieldValue === "") {
            errorInput.innerHTML = "This field is required";
            e.preventDefault();
            return false;
        }
        else {

            errorInput.innerHTML = "";

            interestContainer.addEventListener('mouseover', () => {

                interestList = interestContainer.childNodes

                interestList.forEach((item) => {

                    item.addEventListener('mouseover', () => {
                        item.style.borderRadius = "5px";
                        item.style.border = "1px solid #AD4C4C";
                    });

                    item.addEventListener('mouseout', () => {
                        item.style.borderRadius = "0px";
                        item.style.border = "";
                    });

                    item.addEventListener('click', () => {
                        location.href = "./vendor.html";
                    })
                });
            });

            return true;
        }

    });


    return true;
}

locationInput.addEventListener("mouseover", validateData);
interestInput.addEventListener("mouseover", validateData);

//console.dir(input)
