document.open();

var productList = new Array();

productList = [
    {
        productName: "Refuel Max",
        imageUrl: "../css/images/Rectangle 28 (1).svg",
        productPrice: 3000
    },
    {
        productName: "Express Meal",
        imageUrl: "../css/images/Rectangle 28 (2).svg",
        productPrice: 3500
    },
    {
        productName: "Citizen Meal",
        imageUrl: "../css/images/Rectangle 28 (3).svg",
        productPrice: 5000
    }
]


for(i=0; i < productList.length; i++){
    document.write( productList[i].productName + " with "
    + productList[i].imageUrl + " is sold for "   + productList[i].productPrice + "<br/>") 
}

document.close();
