//the js page i linked to my html page
      var productList = [
        {
            productName: "Iphone 11",
            imageUrl: "https://picsum.photos/200",
            productPrice: "200",
        },
    
        {
            productName: "Samsung A30",
            imageUrl: "https://picsum.photos/300",
            productPrice: "300",
        },
    
        {
            productName: "Tecno Spark 4",
            imageUrl: "https://picsum.photos/400",
            productPrice: "400",
        }
    ]
    //i looped the array here
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i]; //the product is a variable name is used for the array product list and . was used to target specific items
        document.write( product.productName + " with " + product.imageUrl + " is sold for " + "N" + product.productPrice + "</br>");
        //i added the /br so each item will be displayed on a differnt line
     }
    
    