//declaring an array that stores product objects
let productList = [
     {
        "productName" : "Boom Paste",
        "imageUrl" : "https://wwww.boom.com",
        "productPrice": "ZMW 16.00"
    },

   {
        "productName" : "Ukwaju Juice",
        "imageUrl": "https://wwww.ukwaju.com",
        "productPrice" : "ZMW 14.00"
    },

    {
        "productName" : "Salt",
        "imageUrl": "https://www.salt.com",
        "productPrice": "ZMW 10.00"
    }
];
//creatig a loop to loop through all product objects in the array and print out a string that picks out the contained values
for (let i = 0 ; i < productList.length ; i++) {

    document.write(productList[i].productName + " "+ "with" + " " +productList[i].imageUrl + " " +"is sold for" +" "+ productList[i].productPrice + "<br>");
}
