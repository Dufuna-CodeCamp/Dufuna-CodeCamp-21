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
  for (let i = 0; i <= productList.length; i++) {
    let product = productList[i];
    document.write(
      `${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}` 
    );
    }