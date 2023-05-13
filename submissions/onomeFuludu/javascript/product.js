let productList = [
   {
       productName: "infinixnote5",
       imageUrl: "images/infinixnote5.jpg",
       productPrice: "#39500",
   },

   {
       productName: "infinixnote7",
       imageUrl: "images/infinixnote7.jpg",
       productPrice: "#40500",
   },

   {
       productName: "infinixnote11",
       imageUrl: "images/infinixnote11.jpg",
       productPrice: "#135500",
   },
];


productList.forEach(function (product) {
   document.write(
     `<p> <h3>${product.productName}</h3> <img src=${product.imageUrl} /> <br /> is sold for ${product.productPrice} </p>`
   );
 });