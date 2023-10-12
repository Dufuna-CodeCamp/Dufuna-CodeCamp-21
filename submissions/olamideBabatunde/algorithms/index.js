let newProductPrice = 0;

//ARRAY FOR PRODUCT ITEMS
var products = [
  "Canon Kit Lens 15-55mm",
  "Nikon 3100",
  "Samsung NX300",
  "Canon EOS 80D",
  "Sony Alpha A7s",
  "Sony NX 300M",
  "Panasonic Lumix GH4",
  "Panasonic Lumix DC-GH5",
  "Xiaomi Y1-M1",
  "Fujifilm X-A10",
  "Canon DSLR Rebel T7",
  "Canon DSLR EOS 2000D",
  "Sony A7ii",
  "Sony A6500 Mirrorless",
  "Sony Alpha A7r III",
  "Sony NEX-3N",
  "Nikon V1",
  "Sony NEX-F3",
  "Sony NEX-5",
  "Olympus PEN E-PL6",
];

//ARRAY FOR PRODUCT PRICE
var product_price = [
  500, 200, 750, 2000, 1600, 300, 800, 5000, 500, 600, 1200, 1200, 2000, 2000,
  5000, 750, 200, 800, 900, 750,
];

function productArrayAlgorithm() {
  //LOOP THROUGH PRODUCTS TO GET THE LENGTH OF EACH PRODUCT ITEM
  for (let i = 0; i < products.length; i++) {
    //LOOP THROUGH PRODUCT PRICE TO GET THE PRICE OF EACH PRODUCT ITEM
    for (let j = 0; j < product_price.length; j++) {
      //IF PRODUCT LENGTH IS EVEN
      //DOUBLE THE PRICE
      if (products[i].length % 2 === 0) {
        // console.log(product_price[j]);
        newProductPrice = product_price[j] * 2;
        console.log(`The price of ${products[i]} is ${newProductPrice} <br>`);
        // document.write(
        //   `The price of ${products[i]} is ${newProductPrice} <br>`
        // );
      }

      //ELSE IF PRODUCT LENGTH IS ODD
      //HALF THE PRICE
      else {
        newProductPrice = product_price[j] / 2;
        console.log(
          `The price of ${"  " + products[i]} is ${"  " + newProductPrice} <br>`
        );
        // document.write(
        //   `The price of ${"  " + products[i]} is ${"  " + newProductPrice} <br>`
        // );
      }
      i++;
    }
  }
}
//CALL THE FUNCTION
productArrayAlgorithm();
