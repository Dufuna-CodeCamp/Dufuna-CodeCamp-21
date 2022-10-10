const productList = [
     {
        productName: "Iphone11",
        imageUrl: "iphone.jpeg",
        productPrice:" $1000"
    },

     {
        productName: "Iphone12",
        imageUrl: "iphonee.jpeg",
        productPrice:" $1500"
    },

    {
        productName: "Iphone13",
        imageUrl: "iphoneee.jpeg",
        productPrice:" $2000"
    }
]
for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    document.write(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<br>");
}
