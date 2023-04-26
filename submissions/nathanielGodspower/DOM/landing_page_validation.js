const locations = document.getElementById('location');
const interestsItem = document.querySelectorAll('.interests__item');

locations.onchange = () => {
	const location = locations.value;

	if (location) {
		interestsItem.forEach((interest) => {
			const imgTag = interest.firstElementChild;
			imgTag.src = imgTag.src.replace('_disabled.svg', '.svg');
			interest.href = '../css/vendors.html';
			interest.classList.remove('disabled-item');
		});
	} else {
		interestsItem.forEach((interest) => {
			const imgTag = interest.firstElementChild;
			imgTag.src = imgTag.src.replace('.svg', '_disabled.svg');
			interest.removeAttribute('href');
			interest.classList.add('disabled-item');
		});
	}
};
