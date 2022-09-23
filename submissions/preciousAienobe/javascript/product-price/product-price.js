const productList = [
    {
        productName: "Chevrolet Corvette",
        imageURL: "https://images.pexels.com/photos/13555037/pexels-photo-13555037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        productPrice: "$20,000"
    },

    {
        productName: "Bentley Bentayga",
        imageURL: "https://images.pexels.com/photos/8343503/pexels-photo-8343503.jpeg?auto=compress&cs=tinysrgb&w=600",
        productPrice: "$30,000"
    },

    {
        productName: "Mercedes-AMG",
        imageURL: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
        productPrice: "$40,000"
    }
];

productList.forEach(productList => {
    document.write(
        `<p><strong>${productList.productName}</strong> with ${productList.imageURL} is sold for <strong>${productList.productPrice}</strong></p>`
    )
});
