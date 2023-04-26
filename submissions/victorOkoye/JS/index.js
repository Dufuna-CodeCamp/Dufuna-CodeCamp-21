var productList = [
    {productName:'Snicker',
        imageUrl:'https://resale.com/obj1',
        productPrice:1000
    },
    {productName:'Shoe bag',
        imageUrl:'https://resale.com/obj2',
        productPrice:2000
    },
    {productName:'Gold Watch',
        imageUrl:'https://resale.com/obj3',
        productPrice:1500
    }
];


productList.forEach(function(product){
    document.write(product.productName + ' with ' + product.imageUrl + ' is sold for ' + product.productPrice + '<br>');
});