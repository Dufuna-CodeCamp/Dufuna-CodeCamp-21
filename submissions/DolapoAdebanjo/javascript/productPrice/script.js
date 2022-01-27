const products = [
  {
    productName: "Sneakers",
    imageUrl: "https://drive.google.com/file/d/1P-mMVSk_2Rv26EgyqkrtSPgScY1wC_YA/view?usp=sharing",
    productPrice: "$5.00",
  },
  {
    productName: "Dress",
    imageUrl: "https://drive.google.com/file/d/1SgHPF9tVGKnFQ0IuF_0T2xNvS2xM9eHT/view?usp=sharing",
    productPrice: "$12.00",
  },
  {
    productName: "Tie",
    imageUrl: "https://drive.google.com/file/d/1eVNC7VJe-5YFsNb1zAbTz62v-Tl9Ohdc/view?usp=sharing",
    productPrice: "$8.00",
  },
];

for (let i = 0; i <= products.length; i++) {
  let product = products[i];
  document.write(
    `<p>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}.</p> <br>`
  );
}
