let productList = [
    {
        productName: 'Xiaomi Mi 11 ultra 6.81"',
        imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2021/02/mi11ultra-white.jpg',
        productPrice: '#480,000'
    },

    {
        productName: 'Xiaomi Mi 11 6.81"',
        imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2020/12/Xiaomi-Mi-11-All-colors-c-e1612792179662-600x600.jpg',
        productPrice: '#402,720'
    },

    {
        productName: 'Xiaomi Mi 11 lite 6.55"',
        imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2021/01/mi11-lite-550x550.jpg',
        productPrice: '#168,480'
    }
];

for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    document.write("<p>" + product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<p>");

}
