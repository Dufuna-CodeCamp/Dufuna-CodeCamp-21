
let productList = [
    {
        productName: "Iphone 8",
        imageUrl: "https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg",
        productPrice: "$800"
    },

    {
        productName: "Samsung Galaxy S8",
        imageUrl: "https://cdn.pixabay.com/photo/2015/09/02/13/11/iphone-918928_960_720.jpg",
        productPrice: "$600"
    },

    {
        productName: "Google Pixel",
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_960_720.jpg",
        productPrice: "$550"
    }
];

productList.forEach(function(product){
    document.write(`${product.productName}`+" "+`${product.imageUrl} is sold for ${product.productPrice}`+ "<br >" +"<br >");
});
