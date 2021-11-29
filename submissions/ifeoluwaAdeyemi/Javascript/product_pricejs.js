
let productList = [
    {
        productName: "Hand Bag",
        imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        productPrice: "#12000"
    },

    {
        productName: "Back Pack",
        imageUrl: "https://media.istockphoto.com/photos/red-backpack-standing-on-white-background-picture-id184797262?k=20&m=184797262&s=612x612&w=0&h=o3jcLwH3JMq2aa7ouf4r8v87DApz5qnYQNEecGv7nKA=",
        productPrice: "13000"
    },

    {
        productName: "Tote Bag",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
        productPrice: "#1000"
    }
];

productList.forEach(function(item){
    document.write(`${item.productName}${item.imageUrl} sells for ${item.productPrice}`);
  });


