let productList = [
  {
    ProductName: "Dangote Sugar 1kg X 10 (1 Bag)",
    ImageUrl:
      "https://arusimgroceries.com/product/dangote-sugar-1kg-x-10-1-bag/",
    ProductPrice: "#5600",
  },
  {
    ProductName: "Power Oil 1.4litres X 8",
    ImageUrl: "https://arusimgroceries.com/product/power-oil-1-4litres-x-8/",
    ProductPrice: "#19800",
  },
  {
    ProductName: "Coke 33cl X 6",
    ImageUrl: "https://arusimgroceries.com/product/coke-33cl-x-6/",
    ProductPrice: "#1050",
  },
];

for (let i = 0; i < productList.length; i++) {
  const product = ProductList[i];
  document.write(
    "<p>" +
      product.ProductName +
      " with " +
      product.ImageUrl +
      " is sold for " +
      product.ProductPrice +
      "<p>"
  );
}
