
// Class
class Product {
    constructor(productName, imageUrl, productPrice) {
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.productPrice = productPrice;
    }
}


product1 = new Product("Chicken","www.image1.svg","$250")
product2 = new Product("Beef","www.image2.svg","$125")
product3 = new Product("Pork","www.image3.svg","$290")

let productList = [product1, product2, product3];

console.log(productList);


for (let i = 0; i < 3; i++) {
        document.write(`<h2> ${productList[i].productName} with ${productList[i].imageUrl}  is sold for ${productList[i].productPrice}  </h2>`)
    }


// console.log(product1.productName);
// console.log(product1.imageUrl); 
// console.log(product1.productPrice);

// console.log(product2.productName);
// console.log(product2.imageUrl);
// console.log(product2.productPrice);

// console.log(product3.productName);
// console.log(product3.imageUrl);
// console.log(product3.productPrice);

// let productLists = [];

// for (let i = 0; i < 3; i++) {
//     productLists.push(`product${i+1}`)
// }

// console.log(productLists)
