const select = document.querySelector("select");
const img = document.querySelectorAll(".service-img");
const items = document.querySelectorAll(".service-item");

const imageUrl = [
	"../images/fast-food.svg",
	"../images/Vegetables & Drinks.svg",
	"../images/Drinks & Cocktails.svg",
	"../images/resturant.svg",
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

