const productList = [
    {
        productName: "Sony PS4 Slim",
        imageUrl: "https://pixabay.com/images/id-2326616/",
        productPrice: "#160,000.00",
    },
    {
        productName: "XBox 360 Console",
        imageUrl: "https://pixabay.com/images/id-1200296/",
        productPrice: "#50,000.00",
    },
    {
        productName: "Nintendo Switch",
        imageUrl: "https://pixabay.com/images/id-3953601/",
        productPrice: "#185,000.00",
    },
];
productList.forEach((product) => {
    document.write(
        `<p>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}</p>`
    );
});

console.log(productList);
