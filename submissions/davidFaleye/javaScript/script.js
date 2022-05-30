let productList = [
    {
        productName: "Aldo Giffani Rust", 
        imageUrl: "https://www.shoelayers.com/image/cache/catalog/products/ALDO-150x150.jpg", 
        productPrice: "₦48,000.00"
    },
    {
        productName: "Madden M-Iglu", 
        imageUrl: "https://www.shoelayers.com/image/cache/catalog/Steve-150x150.jpg", 
        productPrice: "₦40,000.00"
    },
    {
        productName: "Woodmont",
        imageUrl: "https://www.shoelayers.com/image/cache/catalog/WOODMONT-150x150.jpeg", 
        productPrice: "₦56,000.00"
    }
];     
productList.forEach((product) => {
    document.write(
        `${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}<br>`
    );
});