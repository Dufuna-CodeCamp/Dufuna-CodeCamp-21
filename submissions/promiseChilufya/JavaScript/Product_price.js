let productList = [
    {
        productName: "IPhone 13",
        imageUrl: "https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655518__480.jpg",
        productPrice: 10500
    },

    {
        productName: "Samsung Flip",
        imageUrl: "https://media.istockphoto.com/photos/samsung-galaxy-z-flip-on-a-white-background-new-smartphone-with-a-picture-id1329913843.jpg",
        productPrice: 9500
    },

    {
        productName: "Huawei",
        imageUrl: "https://media.istockphoto.com/photos/huawei-p40-pro-telephone-picture-id1215314534.jpg",
        productPrice: 8000
    }
];

productList.forEach(function(gadget){
    document.write('${gadget.productName}${gadget.imageUrl} is sold for ${gadget.productPrice}')
})