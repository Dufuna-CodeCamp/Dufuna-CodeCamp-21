const select = document.querySelector("select");
const img = document.querySelectorAll(".foodimg");
const items = document.querySelectorAll(".food-selection");

const imageUrl = [
	"./images/fast-food.svg",
	"./images/Vegetables _ Drinks.svg",
	"./images/Drinks _ Cocktails.svg",
	"./images/resturant.svg",
];

select.addEventListener("change", () => {
	items.forEach((item) => {
		item.style.cursor = "pointer";
		item.addEventListener("click", () => {
			window.location.href = "./vendors.html";
		});
	});

	for (let i = 0; i < imageUrl.length; i++) {
		img[i].src = imageUrl[i];
	}
});

