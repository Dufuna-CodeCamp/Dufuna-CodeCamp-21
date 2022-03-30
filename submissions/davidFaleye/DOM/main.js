function changePick() {
   let datalist = document.getElementById ("datalist"),
      location = document.getElementById ("location"),
      changeImage = document.getElementById ("changeImage"),
      changeImage1 = document.getElementById ("changeImage1"),
      changeImage2 = document.getElementById ("changeImage2"),
      changeImage3 = document.getElementById ("changeImage3");
      heading = document.querySelectorAll (".heading"),
      details = document.querySelectorAll (".detail"),
      navToLink = document.querySelectorAll (".pick-box");

      location.addEventListener("input", function(event){
        if(event.inputType == "insertReplacementText" || event.inputType ==  null) {
         changeImage.src = "Image/fast-food.svg";
         changeImage1.src = "image/Vegetables _ Drinks.svg";
         changeImage2.src = "image/Drinks _ Cocktails.svg";
         changeImage3.src = "Image/resturant.svg"; 
         
         for (let i = 0; i < heading.length; i++) {
            heading[i].style.color = "#AD4C4C";
         } 
         for (let i = 0; i < details.length; i++) {
            details[i].style.color = "black";
         }
         for (let i = 0; i < navToLink.length; i++) {
            navToLink[i].style.boxShadow = " 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
            navToLink[i].style.cursor = "pointer";
            navToLink[i].onclick = navTo;
         }
      }
   }, false);

   function navTo(){
      window.location.href ="file:///C:/Users/King_Dunamis/Documents/Holy/Dufuna-CodeCamp-21/submissions/davidFaleye/DOM/vendor.html";
   }
}