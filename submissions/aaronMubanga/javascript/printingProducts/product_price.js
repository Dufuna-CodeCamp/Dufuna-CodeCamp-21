var productList = [
    {   
        Name : 'Roses & lily celebration',
        Image : 'https://fyf.tac-cdn.net/images/products/large/BF89-11K_R.jpg?auto=webp&quality=80&width=590',
        Price : 'K35.99'
    },

    {   
        Name : 'Southern Peach Bouqout',
        Image : 'https://fyf.tac-cdn.net/images/products/small/TEV55-6.jpg?auto=webp&quality=80&width=295',
        Price : 'K43.99'
    },

    {   
        Name : 'Big bright Blue Skies',
        Image : 'https://fyf.tac-cdn.net/images/products/small/BF216-11KM.jpg?auto=webp&quality=80&width=295',
        Price :'K35.99'
    }
]
    for (var i=0; i <= productList.length; i++){
        let product = productList[i];

        document.write( product.Name + "  " + "<br>"  + 'with' + "  " + "<br>"  + product.Image + "  " + "<br>" +  'is sold for' + "  " + product.Price + '<br><br>' );
    }   

    

    console.log(productList);

    