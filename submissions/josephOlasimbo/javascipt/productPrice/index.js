let productList = [
    
    {
        productName: "Infinix Smart 5",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/557617/1.jpg?9866",
        productPrice: "$60,000.00",
    },
    {
        productName: "Tecno Spark",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/18/172389/1.jpg?8885",
        productPrice: "$40,000.00",
    },
    {
        productName: "Galaxy A03",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/4853821/1.jpg?1950",
        productPrice: "$35,000.00",
    },
];

productList.forEach(function(product) {
    document .write(`<p>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}</p>`)
});
console.log(productList)

