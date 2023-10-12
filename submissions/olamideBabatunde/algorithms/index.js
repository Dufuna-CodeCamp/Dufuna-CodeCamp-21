// Sample datasheet with product details
const datasheet = [
  { product: "Canon Kit Lens 15-55mm", price: 500 },
  { product: "Nikon 3100", price: 200 },
  { product: "Samsung NX300", price: 750 },
  { product: "Canon EOS 80D", price: 2000 },
  { product: "Sony Alpha A7s", price: 1600 },
  { product: "Sony NX 300M", price: 300 },
  { product: "Panasonic Lumix GH4", price: 800 },
  { product: "Panasonic Lumix DC-GH5", price: 5000 },
  { product: "Xiaomi Y1-M1", price: 500 },
  { product: "Fujifilm X-A10", price: 600 },
  { product: "Canon DSLR Rebel T7", price: 1200 },
  { product: "Canon DSLR EOS 2000D", price: 1200 },
  { product: "Sony A7ii", price: 2000 },
  { product: "Sony A6500 Mirrorless", price: 2000 },
  { product: "Sony Alpha A7r III", price: 5000 },
  { product: "Sony NEX-3N", price: 750 },
  { product: "Nikon V1", price: 200 },
  { product: "Sony NEX-F3", price: 800 },
  { product: "Sony NEX-5", price: 900 },
  { product: "Olympus PEN E-PL6", price: 750 },
];

// Create a products array from the products in the datasheet
const products = datasheet.map((item) => item.product);

//  Create a product_price array from the product prices in the datasheet
const productPrices = datasheet.map((item) => item.price);

// Check length, update prices, and print
for (let i = 0; i < products.length; i++) {
  const productName = products[i];
  const price = productPrices[i];
  const length = productName.length;

  let newPrice;

  if (length % 2 === 0) {
    newPrice = price * 2;
  } else {
    newPrice = price / 2;
  }
  console.log(`The price of ${productName} is ${newPrice}`);
}