let productList = [
	{
		productName: 'iPhone 14',
		imageUrl: '<img style="height: 50px;" src="images/download.jpg" alt="">',
		productPrice: 'NGN 880,000',
	},

	{
		productName: 'iPhone 13',
		imageUrl: '<img style="height: 50px;" src="images/d1.jpg" alt="">',
		productPrice: 'NGN 800,000',
	},

	{
		productName: 'iPhone 12',
		imageUrl: '<img style="height: 50px;" src="images/d2.jpg" alt="">',
		productPrice: 'NGN 700,000',
	},
];

for (let a = 0; a < productList.length; a++){
	let all = productList[a];
	document.write('<p></p>' + all.productName + 'with ' + all.imageUrl + ' is sold for' + all.productPrice + '<p></p><br>');
}