let productList = [
    {
        productName:"Slippers",
        imageUrl:"www.fashion/slippers",
        productPrice:"#160"
    },

    {
        productName:"Shoe",
        imageUrl:"www.fashion/shoe",
        productPrice:"#120"
    },

    {
        productName:"Bag",
        imageUrl:"www.fashion/bag",
        productPrice:"#130"
    }
];

productList.forEach(item => {
    document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice} <br><br>`);
});
