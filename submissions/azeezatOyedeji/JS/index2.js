const productList = [
  {
    productName: "Vitamin C Serum",
    imageUrl: "https://www.google.com/vitc",
    productPrice: "$20",
  },
  {
    productName: "Face Scrub",
    imageUrl: "https://www.google.com/scrub",
    productPrice: "$10",
  },
  {
    productName: "Face Toner",
    imageUrl: "https://www.google.com/toner",
    productPrice: "$15",
  },
];

productList.forEach((item) => {
  document.write(
    item.productName +
      " with " +
      item.imageUrl +
      " is sold for " +
      item.productPrice +
      "<br/>"
  );
});
