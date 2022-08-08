var productList = [

    {productName: "Shoes",
    imageUrl: "https://sales.com",
    productPrice: "$20"},
    {productName: "Bags", imageUrl: "https://sales.com", productPrice: "$50"
    },
    {productName: "Clothes",
    imageUrl: "https://sales.com",
    productPrice: "$100"
    } 
]
productList.forEach(function($){
    document.write($.productName + " with " + $.imageUrl + " is sold for " + $.productPrice + "<br>") 
 });

