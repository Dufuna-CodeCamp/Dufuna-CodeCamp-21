const productList = [
    {
        productName: "Mango",
        imageUrl: "mangoUrl",
        productPrice: 360.0,
    },
    {
        productName: "Apple",
        imageUrl: "appleUrl",
        productPrice: 360.0,
    },
    {
        productName: "Carrot",
        imageUrl: "carrotUrl",
        productPrice: 360.0,
    },
];
productList.forEach((product) => {
    document.write(
        `<p>${product.productName} ${product.imageUrl} is sold for ${product.productPrice}</p>`
    );
});

console.log(productList);
