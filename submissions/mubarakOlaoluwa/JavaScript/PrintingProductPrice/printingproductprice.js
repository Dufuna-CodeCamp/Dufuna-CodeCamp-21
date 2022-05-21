function print (x) {

    var productlist = ['object1', 'object2', 'object3'];
    
        productlist[0] = {
            productname: 'Powerbank',
            imageurl: 'imageurl1',
            price: '#10,000'
        };

        productlist[1] = {
            productname: 'Hp laptop',
            imageurl: 'imageurl2',
            price: '#200,000'
        };

        productlist[2] = {
            productname: 'Mobile Phone',
            imageurl: 'imageurl3',
            price: '#120,000'
        };

return productlist[x].productname + ' with ' + productlist[x].imageurl +
    ' is sold for ' + productlist[x].price ;  

}

for (i = 0; i < 3; i++)  {
    document.write (print(i) + '<br>');

}