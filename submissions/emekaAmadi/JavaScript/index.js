const productList = [
  {
    productName: "Audi Soft",
    imageUrl:
      "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productPrice: "$20,000,000",
  },
  {
    productName: "Royce",
    imageUrl:
      "https://images.pexels.com/photos/5804273/pexels-photo-5804273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productPrice: "$1,000,000",
  },
  {
    productName: "Lambogini",
    imageUrl:
      "https://images.pexels.com/photos/439405/pexels-photo-439405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productPrice: "$50,000,000",
  },
];

productList.map((e) =>
  document.write(
    `<h1>${e.productName}</h1> <div><img src=${e.imageUrl} /></div> <br /> is sold for ${e.productPrice}`
  )
);
