let productList = [
    {
        productName: "Travel Neck Pillow",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/415508/1.jpg?3103",
        productPrice: "₦3500"
    },
    {
        productName: "Slim Men's Jacket Grey",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/6512511/1.jpg?2920",
        productPrice: "₦2990"
    },
    {
        productName: "Polystar Powerful Home Theater With USB PV- HT1202",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/693789/1.jpg?2736",
        productPrice: "₦35,319"
    }
];
productList.forEach((item) => {
    document.write(
        `<p>${item.productName} with ${item.imageUrl} is sold for ${item.productPrice}</p>`
    )
});