var productList = [
     
    {
        productName:"Nike Air",
        productUrl:"www.Nikeair.com",
        productPrice:7000
    } , 

    {
        productName:"Adiddas",
        productUrl:"www.adiddas.com",
        productPrice: 5000

    } ,

    {
        productName:"Asics",
        productUrl:"www.ascis.com",
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