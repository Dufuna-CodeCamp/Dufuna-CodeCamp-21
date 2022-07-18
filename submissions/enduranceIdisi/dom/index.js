//variable to select location
const location1 = document.querySelector("#location");

//variable for pick an interest div
const interest = document.querySelector(".interest-wrap2");

//get the div that removes the interest div
const remove = document.querySelector(".interest-wrap");

//event listener for what happens when user selects a location
location1.addEventListener("change", () => {
	if (location1.innerHTML != " ") {
		interest.classList.replace("interest-wrap2", "interest-wrap3");
		remove.classList.replace("interest-wrap", "remove_interest");
	} else {
		interest.classList.replace("interest-wrap3", "interest-wrap2");
	}
});

//event listener for what happens when user picks an interest
interest.addEventListener("click", () => {
	location.href = "../vendors/vendor.html";
});
