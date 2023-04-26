let productList = [

    {productName: 'Fendi Bag', imageURL: "https://guardian.ng/wp-content/uploads/2022/02/A-Fendi-bag.jpg", productPrice: 200000
},

   {productName: 'Aquazurra heels', imageURL: "https://images.selfridges.com/is/image/selfridges/R03939529_FUCHSIA_M?$PDP_RV_ALL$", productPrice: 250000
},

   {productName: 'Ralph Lauren Perfume', imageURL: "https://m.media-amazon.com/images/I/61K0bsKuffL.jpg", productPrice: 40000
},

];
productList.forEach(function(product) {
   document.write(product.productName + ' with ' + product.imageURL + ' is sold for ' + product.productPrice + '.' + '<br><br>')
})


