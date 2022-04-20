var productList = [

    {
        Name : "Toyota Hilux",
        Image : "http://home/desktop/practice/image/hilux.jpeng",
        price : "k12,000"
    },

    {
        Name : "Mark X",
        Image : "http://home/desktop/practice/image/mark x.jpeng",
        price : "k300,000"
    },

    {
        Name : "G Wagon",
        Image : "http://home/desktop/practice/image/wagon.jpeng",
        price : "k900,000"
    },
]

// this is where the printing happenings

for (var i=0; i<=productList.length; i++) {
    var product=productList[i];
    document.write (product.Name + " " +  "with" + " " + product.Image + " " + "is sold for" + " "  + product.price +"<br><br>");
    
     
}