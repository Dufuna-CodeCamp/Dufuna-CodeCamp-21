const product_names = [
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
    "Olympus PEN E-PL6"
];

const product_prices = [
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

const printProductPrice = (array_names, array_prices) => {
    for (let i = 0, j = 0; i < array_names.length, j < array_prices.length; i++, j++) {    

        if (array_names[i].length % 2 == 0) {
            array_prices[i] = array_prices[i] * 2;            
    
        } else {
            array_prices[i] = array_prices[i] * 0.5
        }
    }
     return ([array_names, array_prices]);
}

const [products, product_price] = printProductPrice(product_names, product_prices);
// for (let i = 0, j = 0; i < products.length, i < product_price.length; i++, j++) {
//     // Print out the product prices for all the products
//     // document.write (`<p>The price of ${products[i]} is $${product_price[j]}</p>`)
//     //console.log(`The price of ${products[i]} is $${product_price[j]}`); 
// }

module.exports = {
    products, 
    product_price
};