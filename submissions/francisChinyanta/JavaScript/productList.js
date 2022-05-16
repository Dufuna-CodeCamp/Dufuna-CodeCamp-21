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

 /*JavaScript Second Task*/
var positiveDifference = 123 - 7;
for(var x = 1;x < positiveDifference;x++){
    if(x % 3 === 0){
       console.log("Software");
   }else if(x % 5 === 0){
       console.log("Developer"); 
   }else if (x % 3 === 0 && x % 5 ===0){
        console.log("Software Developer");
    }else 
console.log(x);
}

