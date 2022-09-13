const productlist = [
  {
    productName:"Brown Bucket Hat",
    imageUrl: "https://media.istockphoto.com/photos/brown-bucket-hat-isolated-on-a-white-background-picture-id1336711955?s=612x612",
    productPrice: "$500",
  },
  {
    productName: "Horse Rider Hat",
    imageUrl: "https://media.istockphoto.com/photos/rodeo-horse-rider-wild-west-culture-americana-and-american-country-picture-id1184522745?s=612x612",
    productPrice: "$750",
  },
  {
    productName: "Stylish Hat",
    imageUrl: "https://media.istockphoto.com/photos/stylish-hat-isolated-on-white-trendy-headdress-picture-id1404197101?s=612x612",
    productPrice: "$680",
  },
];

productlist.forEach(productlist => {
  document.write(
    `<h2>${productlist.productName}</h2> with ${productlist.imageUrl} is sold for <strong>${productlist.productPrice}</strong>`
  );
})
  