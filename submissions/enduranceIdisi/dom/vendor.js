//variable to store the add to chart button
const addToCart = document.querySelectorAll(".cart");

//variable for the cart navigaion menu display
const cartNav = document.querySelector("#cart-nav");

let arr = []; //empty array to store items in the cart

//what happens when the add to cart button is clicked
addToCart.forEach((e) => {
	e.addEventListener("click", () => {
		if (e.classList.contains("cart")) {
			e.classList.replace("cart", "addCart");
			e.innerText = "Remove";
			arr.push("item picked");
		} else {
			e.classList.replace("addCart", "cart");
			e.innerText = "Add to cart";
			arr.pop();
			console.log(arr);
		}

		//if an item is in the cart display the radio button
		if (arr.length === 0) {
			cartNav.style.display = "none";
		} else {
			cartNav.style.display = "inline";
		}
	});
});
