// Challenge 2
const productList = [
    {
      productName: "T-shirt",
      imageUrl: "https://t-shirt",
      productPrice: 30,
    },
    {
      productName: "Jean",
      imageUrl: "https://jean",
      productPrice: 10,
    },
    {
      productName: "Phone",
      imageUrl: "https://phone",
      productPrice: 25,
    },
  ];
  
  const printProduct = () => {
    productList.map((product) => {
      document.write(
        `<p>${product.productName} with ${product.imageUrl} is sold for $${product.productPrice}</p>`
      );
    });
  };
  printProduct();