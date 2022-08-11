    var productsName=[
        "Canon Kit Lens 15-55mm",
        "Nikon 3100",
        "Samsung NX300",
        "Canon EOS 80D",
        "Sony Alpha A7s",
        "Sony NX300M",
        "Panasonic Lumix GH4",
        "Panasonic Lumix DC-GH5",
        "Xiaomi Y1-M1",
        "Fujifilm X-A10",
        "Canon DSLR Rebel",
        "Canon DSLR EOS 2000D",
        "Sony A7ii",
        "Sony A6500 Mirrorless",
        "Sony Alpha A7r lll",
        "Sony NEX-3N",
        "Nikon V1",
        "Sony NEX-F3",
        "Olympus PEN E-PL6"
    ];

    var ProductPrice=[
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

   console.log(productsName.length);

   function evenPrices() {

    for (let i = 0; i < productsName.length; i++) {

        for (let j = 0; j < productsName.length; j++) {

            if(i === j ){
                if ( productsName.length % 2 == 0) {

                    ProductPrice[j] = ProductPrice[j] * 2;
    
                    document.write("The price of "  + productsName[i] + " is :"  + "<br>" + ProductPrice[j] + "<br><br>")
    
                } else {
    
                    ProductPrice[j] = ProductPrice[j] / 2;
    
                    document.write("The price of "  + productsName[i] + " is :" +  "<br>" + ProductPrice[j] + "<br><br>")
    
                }
            }
        }
    }

}

   evenPrices();