const productList = [
    
    {
        productName:"HP Pavilion Aero Laptop 13-be1097nr",
        imageUrl:"https://www.hp.com/us-en/shop/pdp/hp-pavilion-aero-laptop-13-be1097nr?source=igodigital",
        productPrice:"$889.99",
    },
    {
        productName:"HP Pavilion Gaming Laptop - 15z-ec200",
        imageUrl:"https://www.hp.com/us-en/shop/pdp/hp-pavilion-gaming-laptop-15z-ec200-2r1x7av-1?jumpid=ma_weekly-deals_product-tile_laptops_3_2r1x7av-1_hp-pavilion-gaming-l",
        productPrice:"619.99",
    },
    {
        productName:"OMEN Laptop 15-ek1097nr",
        imageUrl:"https://www.hp.com/us-en/shop/pdp/omen-laptop-15-ek1097nr?jumpid=ma_weekly-deals_product-tile_laptops_12_450b9ua_omen-laptop-15-ek109",
        productPrice:"1,149.99",
    },
    
];

for ( i = 0; i < productList.length; i++) {
    var product = productList[i];
    document.write(
        `<h3><i> ${product.productName} with ${product.imageUrl} is sold for ${product.productPrice} </i></h3>`
    );
}