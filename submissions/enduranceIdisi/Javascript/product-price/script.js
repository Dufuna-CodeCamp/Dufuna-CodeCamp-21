let productList = [
	{
		productName: "Infinix",
		imageUrl: "snapchat-1057700236.jpg",
		productPrice: 1000,
	},
	{
		productName: "Iphone",
		imageUrl: "iphone.jpg",
		productPrice: 2000,
	},
	{
		productName: "Nokia",
		imageUrl: "nokia.jpg",
		productPrice: 3000,
	},
];
for (let i = 0; i < productList.length; i++) {
	document.write(
		productList[i].productName +
			" with " +
			productList[i].imageUrl +
			" is sold for " +
			productList[i].productPrice +
			"    "
	);
}
