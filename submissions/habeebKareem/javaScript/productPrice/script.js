const productList = [
    {
        productName: 'Apple IPhone 13 Pro Max 6.7"',
        imageUrl: 'https://pixabay.com/photos/iphone-13-iphone-13-pro-iphone-6655518/',
        productPrice: 'is sold for ₦ 920,000'
    },

    {
        productName: 'Apple IPhone 13 6.1"',
        imageUrl: 'https://pixabay.com/photos/iphone-smartphone-apple-iphone-6788762/',
        productPrice: 'is sold for ₦ 540,000'
    },

    {
        productName: 'Apple Airpods Pro-White"',
        imageUrl: 'https://pixabay.com/photos/earphones-apple-airpods-pro-white-5193970/',
        productPrice: 'is sold for ₦ 120,000'
    },
];

for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    console.log(product);
    document.write(
        `<h5>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}</h5>`        
    );
}