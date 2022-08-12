// Using product detail information from this datasheet,

// Create a products array from the products in the datasheet.
// Create a product_price array from the product prices in the datasheet.
// Check the length of the product names in your products array.
// If the length of the product name is even, double the price of the product.
// If the length is odd, the product price should be halved.
// Print out the product prices for all the products using this format The price of [product name] is [new product price]
// Ensure your PR is created with the task title as seen on the mobile App


let productName =["canon kit lens", 'Nkon', 'Samsung', 'Canon', 
                'Sony Alpha', 'Sony NX', 
                'Panasonic Lumix GH4', 'Panasonic Lumix DC-GH5', 
                'Xiaomi', 'Fujifilm', 
                'Canon DSLR', 'Canon DSLR EOS', 
                'Sony A7','Sony A6500', 'Sony Alpha A7r', 
                'SOny NEX-3N', 'Nikon V1', 'Sony NEX-F3', 'Sony NEX-5', 
                'Olympus PEN'];
let productPrice = [500, 200, 750,2000,1600, 
                    300, 800, 5000, 500, 600, 1200,
                     1200, 2000, 2000, 5000, 750, 200,
                      800, 900,750];

    
function squareEven(array1, array2){
    for(i = 0; i <array1.length; i++){
        if (i % 2 == 0) {
            array2[i] = Math.pow(array2[i], 2);
        }
        else if(i % 2 !== 0){
            array2[i] = array2[i]/2;
        }
    }
    return productName.forEach((item,arr)=>{
        document.write(  `The price of ${item} is ${productPrice[arr]} <br><br>`)
    });
}





squareEven(productName, productPrice);

