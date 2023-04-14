const productList = [{
    productName:'Face Cream',
    imageURL: 'https://tosnigeria.com/shop/cerave-facial-moisturising-lotion-pm-uk-version/',
    productPrice: '11,000'
},

{
    productName:'Body Lotion',
    imageURL: 'https://www.mydadthechemist.com/reviews/cerave-daily-moisturizing-lotion-review/',
    productPrice: '9,000'
},

{
    productName:'Body Wash',
    imageURL: 'https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser',
    productPrice: '7,000'
}

]


for (let i = 0; i<productList.length; i++){
    // console.log(productList[i]);
    document.write(`${productList[i].productName} with URL ${productList[i].imageURL} is sold for ₦ ${productList[i].productPrice} <br><br><br> `)
}