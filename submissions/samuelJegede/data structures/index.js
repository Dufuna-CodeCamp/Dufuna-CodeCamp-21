function productNameDisplay() {

    for (let i = 0; i < productName.length; i++) {

        for (let j = 0; j < productPrice.length; j++) {

            if (productName[i].length % 2 === 0) {

                productPrice[j] = productPrice[i] * 2

                document.write("The price of " + productName[i] +  " is " +  productPrice[j] + "<br><br>")

            } else {

                productPrice[j] = productPrice[i] / 2;

                document.write("The price of " +  productName[i] +  " is " + productPrice[j] + "<br><br>")

            }

            i++

        }
    }

}


//defining our arrays
var productName = [
    "Printer","Laptop", "Mouse", "CPU", "Desktop", "Electric fan", "Blender"
]

var productPrice = [
        50000.00 ,100000.00, 7500.00, 20000.00, 16000.00, 30000.00, 8000.00
    ]


//calling the function and pass in the arguments
productNameDisplay();
