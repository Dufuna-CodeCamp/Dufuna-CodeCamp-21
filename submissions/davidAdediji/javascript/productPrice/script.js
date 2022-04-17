const productList = [
	{
		productName:"orange",
		imageUrl:"https://naturalnigerian.com/wp-content/uploads/2012/02/oranges.jpg",
		productPrice:2300
	},

	{
		productName:"tomato",
		imageUrl:"https://media.istockphoto.com/photos/tomato-isolated-tomato-on-white-background-with-clipping-path-full-picture-id941825808?k=20&m=941825808&s=612x612&w=0&h=XD_4P1ppgnhxAQwWJNE1MO0MHJueW3uRvEs1nI1Gadw=",
		productPrice:1000
	},

	{
		productName:"Blender",
		imageUrl:"https://m.media-amazon.com/images/I/71+E7mBZqzL._AC_SL1500_.jpg",
		productPrice:13000
	}
]


for (let i = 0; i <= productList.length; i++)
{
	document.write(`<p> ${productList[i].productName} with ${productList[i].imageUrl} is sold for ${productList[i].productPrice}.</p> <br>`);
}

