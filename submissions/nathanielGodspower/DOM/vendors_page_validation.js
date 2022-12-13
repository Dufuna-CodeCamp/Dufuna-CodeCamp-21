const locations = document.getElementById('location');
const interestsItem = document.querySelectorAll('.interests__item');
const addToCartButtons = document.querySelectorAll('.kfc-single button');
const cart = document.getElementById('cart');

let cartItems = 0;

addToCartButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const innerText = btn.innerText;

		if (innerText === 'Add to Cart') {
			btn.innerHTML = "<img src='./img/remove.svg'/> Remove";
			btn.classList.add('is-selected');
			btn.style.color = 'rgba(255, 255, 255, 1)';
			cartItems++;
		}

		if (innerText === 'Remove') {
			btn.innerHTML = 'Add to Cart';
			btn.classList.remove('is-selected');
			cartItems--;
			btn.style.color = 'rgba(173, 76, 76, 1)';
		}

		if (cartItems > 0) {
			cart.classList.add('has-cart');
		} else {
			cart.classList.remove('has-cart');
		}
	});
});

locations.onchange = () => {
	const location = locations.value;

	if (location) {
		interestsItem.forEach((interest) => {
			interest.href = '../css/vendors.html';
		});
	} else {
		interestsItem.forEach((interest) => {
			interest.removeAttribute('href');
		});
	}
};
