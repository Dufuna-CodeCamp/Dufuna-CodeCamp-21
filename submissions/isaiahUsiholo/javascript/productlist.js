
var productList = [
    {
        productName: "Electric Iron",
        image: "../../Downloads/iron.jpg",
        price: "#4,000" 
    },
    {
        productName: "Chest Freezer",
        image: "../../Downloads/freezer.jpg",
        price: "#120,000" 
    },
    {
        productName: "Microwave oven",
        image: "../../Downloads/microwave.jpg",
        price: "#44,000" 
    }
];

for (i = 0; i <= productList.length; i++) {
    document.write (productList[i].productName + " " + "with" + productList[i].image + " " +"is sold for" + " " + productList[i].price + "<br><br>" );
}
