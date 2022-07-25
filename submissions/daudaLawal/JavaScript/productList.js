//Array of Products
let productList = [
  //Product 1
  {
    productName: "Hp Pavilion 14 11th Gen Intel Core I3,8GB RAM, 512SSD,Iris X,Backlit Keyboard Wins 10",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/165077/1.jpg?2669",
    productPrice: "&#8358; 452,000",
  },
  //Product 2
  {
    productName: "Infinix Intel Core I3, 8GB RAM 256GB SSD, 14 Inch Screen, Windows 10, 1 Year Warranty & Free Laptop Bag",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/7635121/1.jpg?8184",
    productPrice: "&#8358; 259,999",
  },
  //Product 3
  {
    productName: "Lenovo INTEL® CELERON® Lenovo Ideapad 14'' Inches 4GB RAM DDR4 - 1TB HDD WIN 10 +USB LIGHT & 32GB Flash",
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/2067711/1.jpg?9705",
    productPrice: "&#8358; 233,489",
  },
];
//End of Array of Products

//Printing of ProductLists
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
//End of Printing of ProductLists