const productList = new Array(
  (shoe = {
    productName: "Nike",
    imageUrl: "https://www.sneakers.com",
    productPrice: "₦30,000",
  }),
  (wristwatch = {
    productName: "Swatch",
    imageUrl: "https://www.wristwatches.com",
    productPrice: "₦225,000",
  }),
  (handbag = {
    productName: "Dior",
    imageUrl: "https://www.handbags.com",
    productPrice: "₦22,500",
  })
);

productList.forEach((product) => {
  document.write(
    `${product.productName} with
      ${product.imageUrl} is sold for
      ${product.productPrice}`
  );
});
