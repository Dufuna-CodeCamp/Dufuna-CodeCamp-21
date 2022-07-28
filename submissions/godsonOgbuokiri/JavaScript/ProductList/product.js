let productList = [
	{
		productName: "iphone-13-pro",
		imageUrl: "https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large.jpg",
		productPrice: "$1999.99"
	},
	{
		productName: "macbook-air-m2",
		imageUrl: "https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_large.jpg",
		productPrice: "$2999.99"
	},
	{
		productName: "ipad-pro",
		imageUrl: "https://www.apple.com/v/ipad-pro/af/images/overview/display-liquid-retina/liquid_retina_endframe__e22htc2zu0cy_large.jpg",
		productPrice: "$999.99"
	}
];

for (i = 0; i < productList.length; i++) {
	product = productList[i];
	document.write(product.productName + " with <a href = '" + product.imageUrl + "'>" + product.imageUrl + "</a> is sold for " + product.productPrice + "<br>");
}
