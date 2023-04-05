let productList = new Array (
    ['Samsung Galaxy S21 Ultra 5G', 'Samsung Galaxy S22 Ultra 5G', 'Samsung Galaxy S23 Ultra 5G'],
    ['<img style="height: 50px;" src="images/s21.jpg" alt="">', '<img style="height: 50px;" src="images/s22.jpg" alt="">', '<img style="height: 50px;" src="images/s23.jfif" alt="">'],
    ['NGN 394740', 'NGN 546000', 'NGN 489340']
);

document.write (
    productList[0][0] + '   ' + productList[1][0] + '   ' + 'is sold for ' + productList[2][0] + '<br>' + '<br>' +
    productList[0][1] + '   '  + productList[1][1] + '   ' + 'is sold for ' + productList[2][1] + '<br>' + '<br>' +
    productList[0][2] + '   '  + productList[1][2] + '   ' + 'is sold for ' + productList[2][2]
)