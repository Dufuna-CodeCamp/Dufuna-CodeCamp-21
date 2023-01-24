
let productList = [
    {
        productName: "Iphone 12",
        imageUrl: "https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg",
        productPrice: "$800"
    },

    {
        productName: "Iphone X",
        imageUrl: "https://cdn.pixabay.com/photo/2015/09/02/13/11/iphone-918928_960_720.jpg",
        productPrice: "$600"
    },

    {
        productName: "Iphone XR",
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_960_720.jpg",
        productPrice: "$550"
    }
];

productList.forEach(function(item){
    document.write(`${item.productName}${item.imageUrl} is sold for ${item.productPrice}`);
});
