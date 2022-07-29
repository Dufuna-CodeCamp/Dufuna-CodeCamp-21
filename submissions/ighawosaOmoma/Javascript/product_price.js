
cars = {
    productName:'C300 sedan',
    imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-us-spec-front-driving-2-1646682550.jpg?crop=0.645xw:0.571xh;0.0935xw,0.296xh&resize=640:*',
    productPrice:'$44,600'
}
laptops ={
    productName:'Microsoft Surface Laptop 4',
    imageUrl:'https://m.media-amazon.com/images/I/71A1fFf1vOL._AC_SL1500_.jpg',
    productPrice:'$1,799'
}
phones = {
    productName:'Samsung Galaxy S22',
    imageUrl:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/S/2054_1651239627.jpg',
    productPrice:'Samsung Galaxy S22'
}
const productList = [cars, laptops, phones]

productList.forEach(function(product){
    document.write(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<br><br>")
})
 
