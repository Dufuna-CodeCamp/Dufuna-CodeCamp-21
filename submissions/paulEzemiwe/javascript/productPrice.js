let productList = [
  {
    productName: "Bread",
    imageUrl:
      "https://i.pinimg.com/originals/39/3a/e6/393ae6bb02b44e0bad570c07a056df0e.jpg",
    productPrice: "#500",
  },

  {
    productName: "Milk",
    imageUrl: "http://pics.drugstore.com/prodimg/418568/450.jpg",
    productPrice: "#250",
  },

  {
    productName: "Eggs",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1150/6156/products/IMG_1352_large.jpg?v=1582070361",
    productPrice: "#100",
  },
];

productList.forEach(function (product) {
  document.write(
    `<p> <h1>${product.productName}</h1> <img src=${product.imageUrl} /> <br /> is sold for ${product.productPrice} </p>`
  );
});
