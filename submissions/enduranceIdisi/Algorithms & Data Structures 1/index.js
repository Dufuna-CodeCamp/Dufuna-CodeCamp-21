// Array of the products;
const productName = [
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
	"Sony Nex-F3",
	"Sony Nex-5",
	"Olympus PEN E-PL6",
];

//Array of the products price
let productPrice = [
	500.0, 200.0, 750.0, 2000.0, 1600.0, 300.0, 800.0, 5000.0, 500.0, 600.0,
	1200.0, 1200.0, 2000.0, 2000.0, 5000.0, 750.0, 200.0, 800.0, 900.0, 750.0,
];

//empty array to store the new products price
let newProductPrice = [];

//loop to check the length of each name in the products array if it is even or odd
for (let i = 0; i < productName.length; i++) {
	if (productName[i].length % 2 == 0) {
		let newPrice = productPrice[i] * 2;
		newProductPrice.push(newPrice);
		console.log(`The price of ${productName[i]} is ${newProductPrice[i]}. \n <br>`);
	} else {
		let newPrice = productPrice[i] / 2;
		newProductPrice.push(newPrice);
		console.log(`The price of ${productName[i]} is ${newProductPrice[i]}. \n <br>`);
	}
}
