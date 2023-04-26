 let productList = [
   {
        productName: "Eletric Blender", 
        imageUrl: "https://images.search.yahoo.com/search/images;_ylt=AwrEpnSbOkdjg8sQwMxXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANMT0NVSTA1NV8xBHNlYwNwaXZz?p=blender&fr2=piv-web&fr=yhs-invalid#id=18&iurl=http%3A%2F%2Fimages.hayneedle.com%2Fmgen%2Fmaster%3AEMG990.jpg&action=click" , 
        productPrice:"#32,000"
    },

    {
        productName: "Electric Oven", 
        imageUrl: "https://images.search.yahoo.com/search/images;_ylt=AwrFDKTpOkdjnBUQNFqJzbkF;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDOTYwNjI4NTcEX3IDMgRmcgN5aHMtaW52YWxpZARmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZANkTXNNMWM4UFFuU3VDN3hmaDIwaHhBBG5fcnNsdAMwBG5fc3VnZwMxMARvcmlnaW4DaW1hZ2VzLnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzQEcXVlcnkDb3ZlbgR0X3N0bXADMTY2NTYxMjY5OQ--?p=oven&fr=yhs-invalid&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt#id=2&iurl=https%3A%2F%2Fwww.peterboroughappliances.com%2Ffiles%2Fimage%2Fattachment%2F14160%2FWOS97ES0ES2.jpg&action=click" , 
        productPrice:"#80,000"
    },

    {
        productName: "Large Capacity Fridge",
        imageUrl: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/06292022/rf27t5501sr/RF27T5501SR_01_Silver_SCOM.jpg?$product-details-jpg$" ,
        productPrice:"#2,000,000"
    }
];

for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    document.write( product.productName + "  " + "<br>"  + 'with' + "  " + "<br>"  + product.imageUrl + "  " + "<br>" +  'is sold for' + "  " + product.productPrice + '<br><br>' );
}   

console.log(productList);
