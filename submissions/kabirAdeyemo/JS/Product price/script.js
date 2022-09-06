var productList = [{
    productName: "Boerboel",
    imageUrl: "https://thumbs.dreamstime.com/b/male-boerboel-dog-sitting-down-6862832.jpg",
    productPrice: "$150.00"
},
{
    productName: "German Sherperd",
    imageUrl: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
    productPrice: "$85.00"
},
{
    productName: "Rottweiler",
    imageUrl: "https://static9.depositphotos.com/1004199/1159/i/600/depositphotos_11596140-stock-photo-purebred-rottweiler-on-green-grass.jpg",
    productPrice: "$120.00"
}
];

productList.forEach(item => {
document.write(`<h1>${item.productName}</h1> <img src=${item.imageUrl} style="width: 300px; height: auto;"/> <br> going for <p>${item.productPrice}</p>`)
})