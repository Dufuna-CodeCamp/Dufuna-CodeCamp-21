let productList = [
  {
    productName: "Lenovo Yoga 910 8GB Intel Core I7 SSD 512GB",
    imageUrl:
      "https://pictures-nigeria.jijistatic.com/72034897_MzAwLTMwMC1kOGRmOTExOTBl.webp",
    productPrice: "&#8358;555,000",
  },
  {
    productName: "Laptop Apple MacBook Air 2020 8GB Intel Core I3 SSD 256GB",
    imageUrl: "https://pictures-nigeria.jijistatic.com/60205581__300x400.webp",
    productPrice: "&#8358;430,000",
  },
  {
    productName: "Laptop HP 245 G4 4GB AMD HDD 1T",
    imageUrl:
      "https://pictures-nigeria.jijistatic.com/68919125_MzAwLTMwMC04MWQxM2NmNzIx.webp",
    productPrice: "&#8358;165,000",
  },
];

for (let product of productList) {
  document.write(
    "<p>" +
      product.productName +
      " with " +
      product.imageUrl +
      " is sold for " +
      product.productPrice +
      ". " +
      "</p>"
  );
}
