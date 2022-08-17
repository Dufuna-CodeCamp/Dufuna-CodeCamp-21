var products = [
  'Canon Kit Lens 15-55mm',
  'Nikon 3100',
  'Samsung NX300',
  'Canon EOS 80D',
  'Sony Alpha A7s',
  'Sony NX 300M',
  'Panasonic Lumix GH4',
  'Panasonic Lumix DC-GH5',
  'Xiaomi Y1-M1',
  'Fujifilm X-A10',
  'Canon DSLR Rebel T7',
  'Canon DSLR EOS 2000D',
  'Sony A7ii',
  'Sony A6500 Mirrorless',
  'Sony Alpha A7r III',
  'Sony NEX-3N',
  'Nikon V1',
  'Sony NEX-F3',
  'Sony NEX-5',
  'Olympus PEN E-PL6',
];

var productPrice = [
  500.0, 200.0, 750.0, 2000, 1600.0, 300.0, 800.0, 5000, 500.0, 600.0, 1200.0,
  1200.0, 2000, 2000, 5000, 750.0, 200.0, 800.0, 900.0, 750.0,
];

function productsDisplay() {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < productPrice.length; j++) {
      if (products[i].length % 2 == 0) {
        productPrice[j] = productPrice[j] * 2;

        document.write(
          'The price of ' +
            '<b>' +
            products[i] +
            '</b>' +
            ' is ' +
            '<b>' +
            productPrice[j] +
            '</b>' +
            '<br>'
        );
      } else {
        productPrice[j] = productPrice[j] / 2;

        document.write(
          'The price of ' +
            '<b>' +
            products[i] +
            '</b>' +
            ' is ' +
            '<b>' +
            productPrice[j] +
            '</b>' +
            '<br>'
        );
      }

      i++;
    }
  }
}

productsDisplay();
