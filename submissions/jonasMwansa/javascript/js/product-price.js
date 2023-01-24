//array containing three objects, namely phone, computer and camer
var productList=[

    phone = {
        productName: "Infinix hot 10",
        imageURL : "https://www/ebay.com/products/infinix..",
        productPrice: "K2000"
    },

   computer = {
            productName: "Hp Elitebook",
            imageURL : "https://www/ebay.com/products/hp..",
            productPrice: "K2500"
   },
   camera = {
    productName: "HD camera",
    imageURL : "https://www/ebay.com/products/hd-nikon-camera..",
    productPrice: "K3000"
}

] //array ends here

//looping through the array
for(var i =0; i<productList.length; i++) {
    document.write("<strong>" + productList[i]['productName'] + "</strong>" + " with " + "<strong>" + productList[i]['imageURL']+ "</strong>" + " is sold for <strong>" + productList[i]['productPrice'] + "</strong>" + "<br><br>");
}