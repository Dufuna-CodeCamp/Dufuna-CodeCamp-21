// PRINTING PRODUCT PRICE WITH JAVASCRIPT

let productList = [
    {productName: "Samsung Galaxy A13", 
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/52/4925621/1.jpg?5674",
    productPrice:  129900
    },
    {productName: "Samsung Galaxy A03", 
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/39/4927521/1.jpg?7511",
    productPrice: 64000
    },
    {productName: "Infinix Hot 12 Play", 
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/37/9421721/1.jpg?0607",
    productPrice: 99000
    }
]

productList.forEach((product) => {
    document.write(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}<br><br>`)
})