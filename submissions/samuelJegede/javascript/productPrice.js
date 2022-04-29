let productList = [
    {
        productName: "External hard drive",
        imageUrl: "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg",
        productPrice: "$61",
    },

    {
        productName: "Wireless Keyboard",
        imageUrl: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg",
        productPrice: "$39",
    },

    {
        productName: "Canon Wireless Printer",
        imageUrl: "https://m.media-amazon.com/images/I/71L77GYpiFL._AC_UL320_.jpg",
        productPrice: "$119",
    },
];

productList.forEach(function (product) {
    document.write(
      `<h2>${product.productName}</h2> <img src=${product.imageUrl} /> <br /> is sold for ${product.productPrice}`
    );
});