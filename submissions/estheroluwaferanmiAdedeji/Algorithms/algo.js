var productName = [
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
  "Sony-NEX-5",
  "Olympus PEN E-PL6"
];

var productPrice = [
  500.00,
  200.00,
  750.00,
  2000.00,
  1600.00,
  300.00,
  800.00,
  5000.00,
  500.00,
  600.00,
  1200.00,
  1200.00,
  2000.00,
  2000.00,
  5000.00,
  750.00,
  200.00,
  800.00,
  900.00,
  750.00
];



  for (let i = 0; i < productName.length; i++) {
    if (productName[i].length % 2 == 0) {
      productPrice[i] = productPrice[i] * 2;
    } else {
      productPrice[i] = productPrice[i] / 2
    }

    document.write(
      `The price of ${productName[i]}  is  $${productPrice[i]}  <br><br>`
      );
  }