var productList = new Array({
  productName : "product1",
  imageUrl : "http://localhost:5000/p1",
  productPrice : 1000
},{
  productName : "product2",
  imageUrl : "http://localhost:5000/p2",
  productPrice : 2000
},{
  productName : "product3",
  imageUrl : "http://localhost:5000/p3",
  productPrice : 3000
})


var value;

function printPrice() {
for(let i=0; i<=productList.length; i++){

  document.write(productList[i]['productName'] + " with " + productList[i]['imageUrl'] + " is sold for " + productList[i]['productPrice'] + " ")
}
}
printPrice();
