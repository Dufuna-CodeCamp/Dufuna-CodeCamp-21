var productList = [
        {
                productName: "Fish",
                imageUrl: "www.productprice/Fish",
                productPrice: "#3000",
        },

        {
                productName: "Door",
                imageUrl: "www.productprice/Door",
                productPrice: "#30000",       
        },

        {
                productName: "Bag",
                imageUrl: "www.productprice/Bag",
                productPrice: "#1000",
        },
];

productList.forEach(item => {
        document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice} <br><br>`);
    });
    