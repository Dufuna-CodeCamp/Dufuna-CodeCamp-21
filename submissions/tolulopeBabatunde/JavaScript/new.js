

var productList=[
    {
    productName:"Ladies Office dress - Black ", 
    imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/2898201/1.jpg?9516",
    productPrice: "₦5,100"
},
    {
        productName:"Ladies Vintage Office Dress", 
        imageUrl:"https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/159583/1.jpg?7705", 
        productPrice: "₦4,092"
    },
    {
        productName:"Ladies Bodycon Rap-up Gown - Red",
         imageUrl:"https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/444056/1.jpg?1654",
          productPrice: "₦4,499"
        }
   
]
productList.forEach((item) =>{
   
    document.write(`<p>${item.productName} with ${item.imageUrl} is sold for ${item.productPrice} </p>`
    )
});