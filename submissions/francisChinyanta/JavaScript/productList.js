var productList = [
    {
     productName: "KFC King",
     imageUrl: "../html/img/p1.jpg",
     productPrice: "#5,000",
    },
    {
     productName: "Refuel Max",
     imageUrl: "../html/img/p2.jpg",
     productPrice: "#1,200",
    },
    {
     productName: "Express meal",
     imageUrl: "../html/img/p3.jpg",
     productPrice: "#2,000",
    }
 ]
 for(var i = 0;i < productList.length;i++){
    console.log(productList[i].productName+" with "+productList[i].imageUrl+" is sold for "+productList[i].productPrice);
 }