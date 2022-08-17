let productList = [
    {
        productName: 'Makeup Kit',
        imageUrl:
            'https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg',
        productPrice: '$1800',
    },
    {
        productName: 'Power Bank',
        imageUrl:
            'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/N/153015_1572012940.jpg',
        productPrice: '$500',
    },
    {
        productName: 'Headphones',
        imageUrl:
            'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFlUVhuQWRJUUwuX0FDX1NMMTAwMF8uanBn.jpg',
        productPrice: '$200',
    },
];

productList.forEach((e) => {
    document.write(
        `${e.productName} with ${e.imageUrl} is sold for ${e.productPrice} `
    );
});
