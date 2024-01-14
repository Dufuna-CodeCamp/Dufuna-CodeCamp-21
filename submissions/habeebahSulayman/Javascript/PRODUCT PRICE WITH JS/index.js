let productList = [
  {
    productName: `Infinix Hot 30i 6.6'" HD+, 4+4GB RAM /128GB ROM Android 12`,
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/9940072/1.jpg?3711",
    productPrice: "#97,335",
  },
  {
    productName: `Tecno Spark 10c 6.6" 4GB RAM/128GB ROM Android 13 Black`,
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/2938922/1.jpg?5082",
    productPrice: "#94,900",
  },
  {
    productName: `Oraimo 20,000MAH Type C & USB Port Powerbank
    `,
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/314467/1.jpg?9409",
    productPrice: "#16,800",
  },
];

for (i = 0; i < productList.length; i++) {
  const string = `${productList[i].productName} with ${productList[i].imageUrl} is sold for ${productList[i].productPrice} </br>`;
  // console.log(string);
  document.write(string);
}
