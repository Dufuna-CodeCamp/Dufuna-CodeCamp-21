var productList = [
    {productName : "Samsung Galaxy S22",
     imageUrl : "https://images.app.goo.gl/k6z4P192Xs7iKTGWA",
     productPrice : "#950,000.00"   
    },
    {productName : "Redmi note 11",
     imageUrl : "https://images.app.goo.gl/LRgvD1XxPtSSK6w37",
     productPrice : "#350,000.00"   
    },
    {productName : "Iphone 13 Pro max",
     imageUrl : "https://images.app.goo.gl/ga1MKLYKzETVcA7Q8",
     productPrice : "#660,000.00"   
    }
];

productList.forEach(function(product) {
    document.write(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<br>")
});
