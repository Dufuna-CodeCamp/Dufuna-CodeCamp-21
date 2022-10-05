let productList = [
    {
        productName: "Galaxy S22 Ultra",
        imageUrl: "s22-ultra.jpg",
        productPrice: "N744000"
    },
    {
        productName: "Iphone 13 Pro Max",
        imageUrl: "iphone13.jpg",
        productPrice: "N840000"
    },
    {
        productName: "Pixel 6 Pro",
        imageUrl: "pixel6.jpg",
        productPrice: "N580000"
    }
];

for (let i = 0; i < 3; i++){
    product = productList[i];
    document.write(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<br/><br/>");
}