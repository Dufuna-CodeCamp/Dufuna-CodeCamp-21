const productList = [{
    productName:'Rice',
    imageURL: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/parboiled-rice-1296x728-feature.jpg?w=1575',
    productPrice: '50000'
},

{
    productName:'Beans',
    imageURL: 'https://nairametrics.com/wp-content/uploads/2021/10/Baeans.jpg',
    productPrice: '10000'
},

{
    productName:'Yam',
    imageURL: 'https://solidstarts.com/wp-content/uploads/P1014443-2-480x320.webp',
    productPrice: '60000'
}

]


for (let i = 0; i<productList.length; i++){
    // console.log(productList[i]);
    document.write(`${productList[i].productName} with URL ${productList[i].imageURL} is sold for ₦ ${productList[i].productPrice} <br><br><br> `)
}
