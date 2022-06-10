let productList = [
    {
        productName: "Hp Laptop",
        imageUrl: "https://pixabay.com/photos/laptop-pen-tab-computer-hp-1443559/",
        productPrice: "$450"
    },
  
    {
        productName: "Dell Laptop",
        imageUrl: "https://pixabay.com/photos/laptop-mechanical-keyboard-dell-6332541/",
        productPrice: "$400"
    },
  
    {
        productName: "Asus Laptop",
        imageUrl: "https://www.istockphoto.com/search/search-by-asset?assetid=1317708682&assettype=image",
        productPrice: "$350"
    }

   

  ]
  productList.forEach(function(item){
    document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice} <br><br>`);
  }
  );

   