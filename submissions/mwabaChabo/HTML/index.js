var productList [

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
  },
];



// this will not give you the expected result
// productName, imageUrl and productPrice are arrays
// What are you trying to achieve here ?
document.write(productName + 'with' + imageUrl + 'is sold for' + productPrice)
