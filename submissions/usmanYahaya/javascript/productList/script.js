var product_name = document.querySelector('.product-name');
var product_image = document.querySelector('.product-image');
var product_price = document.querySelector('.product-price');

var productList = [{
        productName: "Grocery",
        imageUrl: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        productPrice: "$4.00"
    },
    {
        productName: "Electronics",
        imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        productPrice: "$5.00"
    },
    {
        productName: "Clothes",
        imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        productPrice: "$7.00"
    }
];

productList.forEach(item => {
    document.write(`<h2>${item.productName}</h2> <img src=${item.imageUrl}/> <br> is sold for <p>${item.productPrice}</p>`)
})