var productlist = ['object1', 'object2', 'object3'];
    
    productlist[0] = {
            productname1: 'Powerbank',
            imageurl1: 'imageurl1',
            price1: '#10,000'
    };

    productlist[1] = {
        productname2: 'Hp laptop',
        imageurl2: 'imageurl2',
        price2: '#200,000'
    };

    productlist[2] = {
        productname3: 'Mobile Phone',
        imageurl3: 'imageurl3',
        price3: '#120,000'
    };

    document.write (productlist[0].productname1 + ' with ' + productlist[0].imageurl1 +
                ' is sold for ' + productlist[0].price1 ); 
    document.write ('<br>'+ productlist[1].productname2 + ' with ' + productlist[1].imageurl2 +
                ' is sold for ' + productlist[1].price2 );
    document.write ('<br>'+ productlist[2].productname3 + ' with ' + productlist[2].imageurl3 +
                ' is sold for ' + productlist[2].price3 );

