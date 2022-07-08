let productList = [

    {
        productName: "Galaxy A03",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/4853821/1.jpg?1950",
        productPrice: "$45,000.00",
    },
    {
        productName: "Infinix Smart 5",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/956486/1.jpg?9746",
        productPrice: "$25,000.00",
    },
    {
        productName: "Nokia C5",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/768048/1.jpg?4184",
        productPrice: "$30,000.00"
    },
];

productList.forEach(function (product) {
    document.write(`<p>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}</p>`)

})