let productList = [
    {
        productName: "iphone11",
        imageUrl: "image/iphone11.png",
        productPrice: "#395000",
    },

    {
        productName: "iphone12",
        imageUrl: "image/iphone12.jfif",
        productPrice: "#405000",
    },

    {
        productName: "iphone13",
        imageUrl: "image/iphone12.jfif",
        productPrice: "#395000",
    },
];


productList.forEach(function (product) {
    document.write(
      `<p> <h3>${product.productName}</h3> <img src=${product.imageUrl} /> <br /> is sold for ${product.productPrice} </p>`
    );
  });