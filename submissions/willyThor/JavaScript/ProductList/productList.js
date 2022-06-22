let productList = [
    {   
	    productName : "Lenovo ThinkPad Laptop",
        imageUrl : "https://i.pcmag.com/imagery/reviews/05lB4QggRCObQiEu0PTLZXm-1.fit_scale.size_1028x578.v1654720081.jpg",
        productPrize : "Ksh 40500"
    },
	
	{
		productName : "Sony PS5",
		imageUrl : "https://www.shutterstock.com/image-photo/riga-latvia-november-23-2020-sony-1859973727",
		productPrize : "Ksh 98000"
	},
	
	{
        productName: "MacBook Pro Laptop",
        imageUrl: "https://www.shutterstock.com/image-photo/chengduchina19feb-vpn-concept-image-brand-new-1649474539",
        productPrize: "Ksh 175000"
    }
	
	
	]	
	productList.forEach(function(item) {
         document.write(`${item.productName} ${item.imageUrl}  ${item.productPrize}  <br><br>`);
       //  console.log(productList);
  }
  );

	 	
