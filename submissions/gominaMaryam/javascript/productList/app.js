const productList = [
	{
		productName: "Audi Sedan",
		imageUrl:
			"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
		productPrice: "$412,999",
	},
	{
		productName: "Ferrai",
		imageUrl:
			"https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
		productPrice: "$100,000",
	},
	{
		productName: "Mercedez Benz",
		imageUrl:
			"https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
		productPrice: "$302,000",
	},
];

// looping through productList
productList.forEach(product => {
    document.write(
		`<strong>${product.productName}</strong> with ${product.imageUrl} is sold for <strong>${product.productPrice}</strong> <br><br>`
	);
})

