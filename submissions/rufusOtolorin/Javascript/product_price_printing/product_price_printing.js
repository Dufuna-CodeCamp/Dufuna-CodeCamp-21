var productList = [
    {
        Name: 'Apple IPhone 13 Pro Max',
        Imageurl: 'https://www.jumia.com.ng/catalog/productimagezoom/sku/AP044MP11JPSPNAFAMZ/image/1/',
        Price: '#755,000'
    },

    {
        Name: 'Hifi Stereo Bluetooth Earphone',
        Imageurl: 'https://www.jumia.com.ng/catalog/productimagezoom/sku/GE779EA13FBGLNAFAMZ/image/1/',
        Price: '#2,500'
    },

    {
        Name: 'Umidigi A13S',
        Imageurl: 'https://www.jumia.com.ng/catalog/productimagezoom/sku/UM742MP2PLYM6NAFAMZ/image/1/',
        Price: '#62,600'
    }
];
for (let i = 0; i <= productList.length; i++) {
    let product = productList[i];
    document.write("<p>" + "<strong>" + product.Name + "</strong>" + " " + "with" + " "  + product.Imageurl + " " + "is sold for" + " " + "<strong>" + product.Price + "</strong>" + "</p>")
}

console.log("productList")