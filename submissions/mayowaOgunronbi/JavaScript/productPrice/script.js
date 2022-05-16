// let name = 'Mayowa!';
// alert("Welcome Back " + name);


productList = [
    {
        productName: "Greg Bennett GD-100S G-Series Acoustic Guitar",
        imageUrl: "C:\Users\USER\Desktop\Pictures\FB_IMG_1532362048988.jpg",
        productPrice: "70$",
    },

    {
        productName: "Professional Jazz Semi Acoustic Guitar",
        imageUrl: "C:\Users\USER\Desktop\Pictures\FB_IMG_1525256966185.jpg",
        productPrice: "300$",
    },

    {
        productName: "Sparkle Glitz Electric Lead Guitar",
        imageUrl: "C:\Users\USER\Desktop\Pictures\FB_IMG_1532032883265.jpg",
        productPrice: "100$",
    }
]

productList.forEach(function(item) {
    document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice}<br><br><br>` )
}
);

