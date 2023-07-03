let productList = [
    {
        productName: "AVENTADOR LP 780-4 ULTIMAE",
        imageUrl: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/ultimae/ar_ultimae.png",
        productPrice: 500000,
    },
    {
        productName: "URUS S",
        imageUrl: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/s/2023/03_06_refresh/urus_s_over_01.jpg",
        productPrice: 230000,
    },
    {
        productName: "COUNTACH LPI 800-4",
        imageUrl: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/countach/ar/Countach_AR_final.png",
        productPrice: 2640000,
    },
]

for (let i = 0; i < productList.length; i++) {
    let items = productList[i];
    document.write('<p></p>' + items.productName + ' with ' + items.imageUrl + ' is sold for ' + '$' + items.productPrice + '<p></p><br>');
}