var productList = [
    
    phone = {
        "productName" : "Tecno",
        "imageURL" : "Desktop/Dufuna/vincentNjele/Javascript/Tecno",
        "productPrice" : "K1,645",

    },

    computer = {
        "productName" : "Lenovo ThinkPad",
        "imageURL" : "Desktop/Dufuna/vincentNjele/Javascript/Thinkpad",
        "productPrice" : "K8,645",

    },

    headsets = {
        "productName" : "AKG",
        "imageURL" : "Desktop/Dufuna/vincentNjele/Javascript/akg",
        "productPrice" : "K200",

    }

]


for(var i =0; i<productList.length; i++) {
   
    
  document.write("<strong>"+productList[i]['productName']+"</strong> " +" with  " +"<strong>"+productList[i]["imageURL"] +"</strong>"+ " is sold for "+"<strong>"+productList[i]["productPrice"]+"</strong>"+"<br>"+"<br>");


}



