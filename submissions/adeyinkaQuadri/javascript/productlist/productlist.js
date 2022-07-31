
let productList = [
    {
        productName: "GG small tote bag",
        imageUrl: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1612459811/659983_92TCG_8563_001_078_0000_Light-GG-small-tote-bag.jpg",
        productPrice: 3000,
    },
    {
        productName: "G-Timeless multibee watch",
        imageUrl: "https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1648083679/704344_ICAA0_9812_001_100_0000_Light-G-Timeless-multibee-watch-38-mm.jpg",
        productPrice: 2500,
    },
    {
        productName: "adidas x Gucci GG Marmont",
        imageUrl: "https://media.gucci.com/style/HEXFFC7D4_Center_0_0_800x800/1650560408/406831_U4DAT_8845_001_100_0000_Light-adidas-x-Gucci-GG-Marmont-belt.jpg",
        productPrice: 700,
    },
]

for (let i = 0; i < productList.length; i++) {
    let items = productList[i];
    document.write( '<p></p>' + items.productName + ' with ' + items.imageUrl + ' is sold for ' + '$' + items.productPrice + '<p></p><br>');
}