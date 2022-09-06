var str = '<br/>'
var productList = [
    {
        productName: 'iPhone 12',
        imageUrl: 'https://www.istore.com/iPhone12',
        productPrice: '350,000'
    },
    {
        productName: 'iPhone 6',
        imageUrl: 'https://www.istore.com/iPhone6',
        productPrice: '80,000'
    },
    {
        productName: 'iPod',
        imageUrl: 'https://www.istore.com/iPod',
        productPrice: '350,000'
    }

];
for(i = 0; (i <= productList.length - 1); i++){
    document.write(productList[i].productName + ' ' + 'with' + ' ' + productList[i].imageUrl + ' ' + ' is sold for' + ' '  + '&#8358;' + productList[i].productPrice + str );
}