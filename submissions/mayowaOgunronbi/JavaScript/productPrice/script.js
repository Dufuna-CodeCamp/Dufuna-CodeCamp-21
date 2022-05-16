// let name = 'Mayowa!';
// alert("Welcome Back " + name);


productList = [
    {
        productName: "Greg Bennett GD-100S G-Series Acoustic Guitar",
        imageUrl: "put the url copied online",
        productPrice: "70$",
    },

    {
        productName: "Professional Jazz Semi Acoustic Guitar",
        imageUrl: "put the url copied online",
        productPrice: "300$",
    },

    {
        productName: "Sparkle Glitz Electric Lead Guitar",
        imageUrl: "put the url copied online",
        productPrice: "100$",
    }
]

productList.forEach(function(item) {
    document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice}<br><br><br>` )
}
);

