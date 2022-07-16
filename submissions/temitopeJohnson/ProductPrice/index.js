const productList = [{
    productName: "Milo",
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nestle.com%2Fsites%2Fdefault%2Ffiles%2Fmilo-detail-brand-page.jpg&imgrefurl=https%3A%2F%2Fwww.nestle.com%2Fbrands%2Fdrinks%2Fmilo&tbnid=m-ggbeEpN-xsQM&vet=12ahUKEwjEvJacjfP4AhUGbRoKHXfMCnQQMygAegUIARDsAQ..i&docid=CsgkRdsnMVvF8M&w=230&h=375&q=milo&ved=2ahUKEwjEvJacjfP4AhUGbRoKHXfMCnQQMygAegUIARDsAQ',
    productPrice: 1500,
},/*an object containing the product details*/
{
    productName: 'Milk',
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.peakmilk.com.ng%2Fwp-content%2Fuploads%2F2020%2F06%2FPeak-Goid-Full-Cream-Unsweetened-Evaporated-Milk-Tin-170g.png&imgrefurl=https%3A%2F%2Fwww.peakmilk.com.ng%2Fassortment%2Fevaporated%2Fpeak-gold-full-cream-unsweetened-evaporated-milk%2F&tbnid=7mreMpCM4fVAIM&vet=12ahUKEwiw9PmrjfP4AhUFBRoKHSTmA9sQMygVegUIARCOAg..i&docid=rrt8_5lAT60FqM&w=990&h=1230&q=milk&ved=2ahUKEwiw9PmrjfP4AhUFBRoKHSTmA9sQMygVegUIARCOAg',
    productPrice: 2000,
},/*an object containing the product details*/
{
    productName: 'Sugar',
    imageUrl: 'https://dangotesugar.com.ng/wp-content/uploads/2020/09/sugar-bowl222.jpg',
    productPrice: 500,
},/*an object containing the product details*/
]; /*an array with objects*/


for (let i = 0; i < productList.length; i++) {
    document.write(productList[i].productName + ' ' + 'with'+ ' ' + productList[i].imageUrl + ' ' + ' is sold for' + ' ' + productList[i].productPrice + ' ' );
}