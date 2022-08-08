
const products = [
    {"Id": "1",
     "ProductName":"Canon Kit Lens 15-55mm",
      "ProductPrice":500.00},

      {"Id": "2",
        "ProductName": "Nikon 3100",
        "ProductPrice": 200.00
    },

    {"Id": "3",
        "ProductName": "Samsung NX300",
        "ProductPrice": 750.00
    }, 

    {"Id": "4",
        "ProductName": "Canon EOS 80D",
        "ProductPrice": 2000.00
    },

    {"Id": "5",
        "ProductName": "Sony Alpha A7s",
        "ProductPrice": 1600.00
    },

    {"Id": "6",
        "ProductName": "Sony NX 300M",
        "ProductPrice": 300.00
    },

    {"Id": "7",
        "ProductName": "Panasonic Lumix GH4",
        "ProductPrice": 800.00
    },

    {"Id": "8",
        "ProductName": "Panasonic Lumix DC-GH5",
        "ProductPrice": 5000.00
    },

    {"Id": "9",
        "ProductName": "Xiaomi Y1-M1",
        "ProductPrice": 500.00
    },

    {"Id": "10",
        "ProductName": "Fujifilm X-A10",
        "ProductPrice": 600.00
    },

    {"Id": "11",
        "ProductName": "Canon DSLR Rebel T7",
        "ProductPrice": 1200.00
    },

    {"Id": "12",
        "ProductName": "Canon DSLR EOS 2000D",
        "ProductPrice": 1200.00
    },

    {"Id": "13",
        "ProductName": "Sony A7ii",
        "ProductPrice": 2000.00
    },

    {"Id": "14",
        "ProductName": "Sony A6500 Mirrorless",
        "ProductPrice": 2000.00
    },

    {"Id": "15",
        "ProductName": "Sony Alpha A7r III",
        "ProductPrice": 5000.00
    },

    {"Id": "16",
        "ProductName": "Sony NEX-3N",
        "ProductPrice": 750.00
    },

    {"Id": "17",
        "ProductName": "Nikon V1",
        "ProductPrice": 200.00
    },

    {"Id": "18",
        "ProductName": "Sony NEX-F3",
        "ProductPrice": 800.00
    },

    {"Id": "19",
        "ProductName": "Sony NEX-5",
        "ProductPrice": 900.00
    },

    {"Id": "20",
        "ProductName": "Olympus PEN E-PL6",
        "ProductPrice": 750.00
    }
    
    ]


const productPrice = [500.00 , 200.00, 750.00, 2000.00, 
                      1600.00, 300.00, 800.00, 5000.00, 500.00, 
                      600.00, 1200.00, 1200.00, 2000.00, 
                      2000.00, 5000.00, 750.00, 200.00, 800.00, 
                      900.00, 750.00];

// console.log(productPrice.length+' '+products.length );

    for (let i = 0; i < products.length; i++) 
    {
        
        // console.log(i+' '+products[i].Id+' '+products[i].ProductName+' '+products[i].ProductPrice);
       if( (products[i].ProductName.length % 2) == 0)
       {
          productPrice[i] = products[i].ProductPrice * 2.0;
          products[i].ProductPrice = products[i].ProductPrice * 2.0;
       }
       else{
            productPrice[i] = products[i].ProductPrice / 2.0;
            products[i].ProductPrice = products[i].ProductPrice  / 2.0;
       }

    }
       
    for (let i =0; i < products.length; i++){

        console.log ('The price of'+ i+''+products[i].ProductName+' is '+''+products[i].ProductPrice );
    }
       
        
        
        
        
