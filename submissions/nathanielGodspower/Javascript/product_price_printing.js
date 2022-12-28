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
