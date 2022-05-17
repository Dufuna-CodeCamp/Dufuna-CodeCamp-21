var productName = ["Canon Kit Lens 15-55mm",
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
    "Olympus PEN E-PL6"]

var productPrice = [
    500.00,
    200.00,
    750.00,
    2000,
    1600.00,
    300.00,
    800.00,
    5000,
    500.00,
    600.00,
    1200.00,
    1200.00,
    2000,
    2000,
    5000,
    750.00,
    200.00,
    800.00,
    900.00,
    750.00
]

function productNameDisplay() {

    for (let i = 0; i < productName.length; i++) {

        for (let j = 0; j < productPrice.length; j++) {

            if (productName[i].length % 2 == 0) {

                productPrice[j] = productPrice[j] * 2

                document.write("The price of " + "<b>" + productName[i] + "</b>" + " is " + "<b>" + productPrice[j] + "</b>" + "<br>")

            } else {

                productPrice[j] = productPrice[j] / 2;

                document.write("The price of " + "<b>" + productName[i] + "</b>" + " is " + "<b>" + productPrice[j] + "</b>" + "<br>")

            }


            i++

        }
    }

}

productNameDisplay();