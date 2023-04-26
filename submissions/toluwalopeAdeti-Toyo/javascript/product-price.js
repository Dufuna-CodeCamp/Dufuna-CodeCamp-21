var productList = [
    {
      productName: "Chocolates",
      imageUrl: "https://www.pexels.com/photo/sweet-chocolate-bars-on-plate-4791265/",
      productPrice: "393,825 naira"
    },
    {
      productName: "Biscuits",
      imageUrl: "https://www.pexels.com/photo/biscuits-in-box-317969/",
      productPrice: "258,373 naira"
    },
    {
      productName: "Wine",
      imageUrl: "https://www.pexels.com/photo/white-and-black-bottle-near-grapes-1407846/",
      productPrice: "540,255 naira"
    }
  ];
  
  for (var i = 0; i < productList.length; i++) {
    document.write(productList[i].productName + " with " + productList[i].imageUrl + " is sold for " + productList[i].productPrice + "<br>")
  }