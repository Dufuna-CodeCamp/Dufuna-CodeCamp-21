let newProductPrice;

//ARRAY FOR PRODUCT ITEMS
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
'Olympus PEN E-PL6'
];

//ARRAY FOR PRODUCT PRICE
var product_price = [
    500, 200, 750, 2000, 1600, 300, 800, 5000, 500, 600,
     1200, 1200, 2000, 2000, 5000, 750, 200, 800, 900, 750
];

function productArray() {
for (let a = 0; a < products.length; a++) {
    for (let b = 0; b < product_price.length; b++) {
        if(products[a].length % 2 === 0){
            console.log(product_price[b])
            newProductPrice = product_price[b] * 2;
          document.write(`The price of ${products[a]} is ${newProductPrice} <br>`) 
        }
        else {
            newProductPrice = product_price[b] / 2;
            document.write(`The price of ${ '  ' +products[a]} is ${ '  '+newProductPrice} <br>`)    
        }
       a++
   }
   
}
}
productArray()