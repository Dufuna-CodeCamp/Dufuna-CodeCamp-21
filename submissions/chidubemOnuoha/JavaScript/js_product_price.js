const productList = [
  
    {        
      productName: "<h1>Rice flavour </h1>",
     imageURL: '<img src="../images/flavour.svg">',
      productPrice: "#900"
    },
    {        
      productName: "<h1>chiken flavour</h1>",
      imageURL: '<img src="../images/chicken.svg">',
      productPrice: "#800"
    },

    {        
        productName: "<h1>chiken flavour</h1>",
        imageURL: '<img src="../images/chicken.svg">',
        productPrice: "#800"

      },
   
]

const total =  productList.forEach(function (product ){
    document.write(`${product.productName}  ${product.imageURL}  is sold for:  ${product.productPrice}`);
});




