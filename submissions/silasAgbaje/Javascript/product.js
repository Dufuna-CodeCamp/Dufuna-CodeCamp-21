var productList = [
    {
        productName: 'Cap',
        imageUrl:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcStfboEHjhJCQJIQtxsuFBMGEd4MTnfBu1bsSkkyQA6WIBPyG7EK2WZUofp09ENXsUhoAV-VRHJT8siM2BEZu4',
        productPrice: '#2000'
    },

    {
        productName: 'Mouse',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg',
        productPrice: '#8000'
    },

    {
        productName: 'Phone',
        imageUrl:'https://media.wired.com/photos/621980b1aaf30ea1c35e400a/125:94/w_1822,h_1370,c_limit/Gear-Samsung-S22-Series.jpg',
        productPrice: '#50000'
    }
];

for (let i = 0; i < productList.length; i++) {
    product = productList[i]
    document.write(`<h4><i> ${product.productName} with ${product.imageUrl} is sold for ${product.productPrice} </i></h4>`)
}
