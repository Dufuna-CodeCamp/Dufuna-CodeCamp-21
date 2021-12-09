
let productList = [
    {
        productName: "Hand Bag",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbag&psig=AOvVaw0XonbfHtWxhbNWwQWgUpbQ&ust=1638996808686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDM1ofJ0vQCFQAAAAAdAAAAABAD/",
        productPrice: "$800"
    },

    {
        productName: "Back Pack",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fschool-bag&psig=AOvVaw0XonbfHtWxhbNWwQWgUpbQ&ust=1638996808686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDM1ofJ0vQCFQAAAAAdAAAAABAY/",
        productPrice: "$600"
    },

    {
        productName: "Tote Bag",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fschool-bag&psig=AOvVaw0XonbfHtWxhbNWwQWgUpbQ&ust=1638996808686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDM1ofJ0vQCFQAAAAAdAAAAABAY/",
        productPrice: "$550"
    }
];

productList.forEach((product) => {
    document.write(
        `<p>${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}</p>`
    );
});

console.log(productList);


