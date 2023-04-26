const products = [
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

const product_price = [
  500.0, 200.0, 750.0, 2000.0, 1600.0, 300.0, 800.0, 5000.0, 500.0, 600.0,
  1200.0, 1200.0, 2000.0, 2000.0, 5000.0, 750.0, 200.0, 800.0, 900.0, 750.0,
];

for (i = 0; i < products.length; i++) {
  if (products[i].length % 2 != 0) {
    product_price[i] /= 2;
  } else {
    product_price[i] *= 2;
  }
  document.write(
    "The price of " + products[i] + " is " + product_price[i] + "<br><br>"
  );
}
