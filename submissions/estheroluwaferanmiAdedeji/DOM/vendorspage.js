const addToCart = document.querySelectorAll(".add-button");

const cartDot = document.querySelector(".cart-dot");

let arr = [];

addToCart.forEach((item) => {
	item.addEventListener("click", () => {
		if (item.classList.contains("add-button")) {
			item.classList.replace("add-button", "remove-button");
			item.innerText = "Remove";
			item.style.color = "rgb(255, 255, 255)"
			arr.push("added");
		} else {
			item.classList.replace("remove-button", "add-button");
			item.innerText = "Add to cart";
			item.style.color = "#C17979"
			arr.pop();
			console.log(arr);
		}


		if (arr.length === 0) {
			cartDot.style.display = "none";
		} else {
			cartDot.style.display = "inline";
		}
	});
});

