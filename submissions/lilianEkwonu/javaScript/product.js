const productList = [
    {
      productName: 'i8 ULTRA MAX',
      imageUrl: './images/i8 ULTRA MAX.jpeg',
      productPrice: '$18.59'
    },
    {
      productName: 'i20 ULTRA MAX  SUIT',
      imageUrl: './images/i20 ULTRA MAX  SUIT.jpeg',
      productPrice: '$10.79'
    },
    {
      productName: 'ULTRA Y10',
      imageUrl: './images/ULTRA Y10.jpeg',
      productPrice: '$20.49'
    }
  ];
  
for (const product of productList) {
    document.write(`<p>${product.productName} with <img src="${product.imageUrl}" alt="" width="100" height="100"> is sold for ${product.productPrice}</p>`);
  }
   