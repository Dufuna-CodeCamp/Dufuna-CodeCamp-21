var productList = [
     
    {
        productName:"Nike Air",
        productUrl:"https://www.Nikeair.com",
        productPrice:7000
    } , 

    {
        productName:"Adiddas",
        productUrl:"https://www.adiddas.com",
        productPrice: 5000

    } ,

    {
        productName:"Asics",
        productUrl:"https://www.ascis.com",
        productPrice: 4000

    }

]
for(let product of productList) {
    document.write(
        "<p>" +
          product.productName +
        " with " +
          product.productUrl +
        " is sold for " +
        product.productPrice +
        ". " +
        "</p>"
    );
}