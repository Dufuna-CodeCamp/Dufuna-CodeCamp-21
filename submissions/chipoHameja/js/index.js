firstProduct = {
    productName: "MacBook Pro",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1632948875000",
    productPrice: "$1,299.00"
}

secondProduct = {
    productName: "Sony Playstation 4",
    imageUrl: "https://m.media-amazon.com/images/I/61n-yWHcmSS._AC_SX425_.jpg",
    productPrice: "$499.00"
}

thirdProduct = {
    productName: "iPhone 12 Pro",
    imageUrl: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg",
    productPrice: "$279.99"
}

var productList = [firstProduct, secondProduct, thirdProduct]

productList.forEach(function(product) {
    document.write(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + "<br><br>")
})