
var positiveDifference=123 -7;

for (var x=1; x<=positiveDifference; x++){
    if((x%3===0)&& (x%5===0)){
        document.write("Software Developer")
    }
    else if(x%3===0){
        document.write("Software")
    }
    else if ( x%5===0){
        document.write("Developer")
    }
}


var productList = [

  {
     productName:"samsung",
     imageUrl:"samsung.com",
     productPrice:1800,
    
  },

  {
   productName:"nokia",
   imageUrl:"nokia.com",
   productPrice:3800,
  },

  {
   productName:"motorola",
   imageUrl:"motorola.com",
   productPrice:4600,
  }

];

productList.forEach(function(gadget){
document.write(`<br><br>${gadget.productName} ${gadget.imageUrl} is sold for ${gadget.productPrice}`)
})

