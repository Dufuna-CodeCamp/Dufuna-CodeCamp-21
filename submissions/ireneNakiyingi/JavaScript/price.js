var productList= [
    {
        productName: "Red Bombshell Lipstick", 
        imageUrl: "https://www.sephora.com/productimages/sku/s1925114-main-zoom.jpg?imwidth=315",
        productPrice:"UGX 45,000"
    },
    {
        productName: "Purple rain Lipstick", 
        imageUrl: "https://s3.r29static.com/bin/entry/f9a/0,0,2000,2400/720x864,85/2096920/image.webp", 
        productPrice:"UGX 45,000"
    },
    {
        productName: "Cherry Bomb Lipstain", 
        imageUrl: "https://www.bbamall.com/?product_id=189294247_65 ", 
        productPrice:"UGX 35,000"

    }
];
productList.forEach(function(product){
        document.write(product.productName + " with "+ product.imageUrl +" is sold for "+ product.productPrice +"."+"<br>")
});

