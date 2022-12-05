/* const num = 123 - 7;

for (let i = 0; i < num; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		document.write('Software Developer', '<br/>');
	} else if (i % 3 === 0) {
		document.write('Software', '<br/>');
	} else if (i % 5 === 0) {
		document.write('Developer', '<br/>');
	}
}
 */

/* 
Create an array called productList
Your productList array should contain 3 objects
Each of the objects of the array should have 3 properties (productName, imageUrl and productPrice)
Using document.write(), Print out the values in this format < productName > with < imageUrl > is sold for < productPrice >
Ensure your PR is created with the task title as seen on the mobile App
On your terminal, ensure you are in the tests/product_price_printing directory when you run ./test.sh command */

const productList = [
	{
		productName: 'Marten High top Boots (UNISEX)',
		imageUrl:
			'https://cdn.shopify.com/s/files/1/0583/8936/4918/products/1_f2232ac3-c3bd-4a77-95cd-66694385c9a6.png?v=1662580124&width=600',
		productPrice: '₦23,000',
	},
	{
		productName: 'Military Boots',
		imageUrl:
			'https://cdn.shopify.com/s/files/1/0583/8936/4918/products/5_ff59b8e8-90c8-4e02-849a-6bdb006c8734.png?v=1655893465&width=360',
		productPrice: '₦30,000',
	},
	{
		productName: 'Rick Sneakers',
		imageUrl:
			'https://cdn.shopify.com/s/files/1/0583/8936/4918/products/5_ff59b8e8-90c8-4e02-849a-6bdb006c8734.png?v=1655893465&width=360',
		productPrice: '₦10,000',
	},
];

productList.forEach(({ productName, imageUrl, productPrice }) => {
	document.write(`
		<div>
			<p>
				${productName} with ${imageUrl} is sold for ${productPrice}
			</p>
		</div>
	`);
});
