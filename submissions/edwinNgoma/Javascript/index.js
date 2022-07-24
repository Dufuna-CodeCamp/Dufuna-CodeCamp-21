var productList = [
    
    phone = {
        "productName" : "Google Pixel 6",
        "imageURL" : "home/ubuntu/Desktop/Dufuna-CodeCamp-21/submissions/edwinNgoma/Javascript/googlepixel.jpg",
        "productPrice" : "K4,065",

    },

    computer = {
        "productName" : "HP Iris Core i5",
        "imageURL" : "home/ubuntu/Desktop/Dufuna-CodeCamp-21/submissions/edwinNgoma/Javascript/Hplaptop.jpg",
        "productPrice" : "K15,000",

    },

    speaker = {
        "productName" : "Beats By Dre",
        "imageURL" : "/home/ubuntu/Desktop/Dufuna-CodeCamp-21/submissions/edwinNgoma/Javascript/beatsbydre.jpg",
        "productPrice" : "K1800",

    }

]


for(var i =0; i<productList.length; i++) {
   
    
  document.write("<strong>"+productList[i]['productName']+"</strong> " +" with  " +"<strong>"+productList[i]["imageURL"] +"</strong>"+ " is sold for "+"<strong>"+productList[i]["productPrice"]+"</strong>"+"<br>"+"<br>");


}



