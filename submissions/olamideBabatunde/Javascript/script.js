var productList = [
  {
    productName: "Black hoodie",
    imageUrl: "https://www.jumia.com.ng/throne-of-grace-printed-hoodie-light-grey-danami-mpg1535425.html",
    productPrice: "#10,000"
  },
  {
    productName: " Unisex T-shirt",
    imageUrl: "https://www.jumia.com.ng/fashion-5-in-1-plain-unisex-t-shirts-combo-97426488.html",
    productPrice: "#10,000"
  },
  {
    productName: "Adidas Sneakers",
    imageUrl: "https://www.jumia.com.ng/adidas-core-sneakers-grand-court-base-84258901.html",
    productPrice: "#42,000"
  }
]
for (var i = 0; i < productList.length; i++) {
  var product = productList[i];
  document.write(
    product.productName +
      " " +
      "with" +
      " " +
      product.imageUrl +
      " " +
      "is sold for" +
      " " +
      product.productPrice +
      "</br>"
  );
}
