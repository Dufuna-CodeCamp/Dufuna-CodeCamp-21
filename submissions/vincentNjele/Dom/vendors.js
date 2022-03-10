

var addToCart = document.getElementById('addtocart');
var addToCart2 = document.getElementById('addtocartss2');
var mycounter= 1;


var notification = document.getElementById('noti');
var view = window.innerWidth;

var counter = 1;

if(view<=768 ) {
        addToCart.style.cursor = "pointer";
        addToCart2.style.cursor= "pointer";
       
}


addToCart.onclick = HandleFunction;

function HandleFunction() {
    
    if(counter>0) {
        
        if(view<768){

            addToCart.style.width = "150px";
            addToCart.style.backgroundColor = "grey";
            addToCart.style.display = "inline-grid";
            addToCart.style.height = "5px";
            addToCart.style.paddingTop = "20px";
            addToCart.style.paddingBottom = "20px";
            addToCart.style.color = "white";
            addToCart.textContent = "Remove";
            addToCart.style.border = "none";
            addToCart.style.cursor = "pointer";
            
            
            var image = document.createElement('img');
            
            image.src = '../images/remove.svg';
            image.style.height= "40px";
            image.style.width= "60px";
            image.style.paddingRight= "5px";
            image.style.marginTop= "-27px";
            image.style.marginLeft = "-22px"
            image.style.color = "black";
            addToCart.append(image);


            // 2
        
            notification.style.cursor = "pointer";
            notification.style.width = "40px";
            notification.style.display = "inline-grid";
            notification.style.height = "5px";
            notification.style.paddingTop = "20px";
            notification.style.paddingBottom = "20px";
            notification.style.color = "black";
            notification.textContent = "Cart";
            notification.style.border = "none";
            notification.style.cursor = "pointer";
        
            var notiImage = document.createElement('img');
            
            notiImage.src = '../images/noti.png';
            notiImage.style.height= "15px";
            notiImage.style.width= "15px";
            notiImage.style.marginTop = "-25px";
            notiImage.style.marginLeft = "33px";
            notiImage.style.color = "black";
            notification.append(notiImage);
            counter--;
            
    
    
    } else {


        addToCart.style.width = "150px";
            addToCart.style.backgroundColor = "grey";
            addToCart.style.display = "inline-grid";
            addToCart.style.height = "5px";
            addToCart.style.paddingTop = "20px";
            addToCart.style.paddingBottom = "20px";
            addToCart.style.color = "white";
            addToCart.textContent = "Remove";
            addToCart.style.border = "none";
            addToCart.style.cursor = "pointer";
            
            
            var image = document.createElement('img');
            
            image.src = '../images/remove.svg';
            image.style.height= "40px";
            image.style.width= "60px";
            image.style.paddingRight= "5px";
            image.style.marginTop= "-27px";
            image.style.marginLeft = "-22px"
            image.style.color = "black";
            addToCart.append(image);


            // 2
        
            notification.style.cursor = "pointer";
            notification.style.width = "40px";
            notification.style.display = "inline-grid";
            notification.style.height = "5px";
            notification.style.paddingTop = "20px";
            notification.style.paddingBottom = "20px";
            notification.style.color = "black";
            notification.textContent = "Cart";
            notification.style.border = "none";
            notification.style.cursor = "pointer";
        
            var notiImage = document.createElement('img');
            
            notiImage.src = '../images/noti.png';
            notiImage.style.height= "15px";
            notiImage.style.width= "15px";
            notiImage.style.marginTop = "-25px";
            notiImage.style.marginLeft = "33px";
            notiImage.style.color = "black";
            notification.append(notiImage);
            counter--;
            
    
      

    }

    } else {
        addToCart.textContent = "Add to Cart";
        addToCart.style.border = "1px solid rgb(172, 13, 13)";
        addToCart.style.backgroundColor = "white";
        addToCart.style.color = "rgb(172, 13, 13)";
        notification.textContent = "Cart";
        addToCart.style.paddingTop = "10px";
        addToCart.style.width = "120px";
        counter++;

        
    }

   
}


document.getElementById('addtocartss2').onclick = function() {

    var notification2 = document.getElementById('noti');  

    if(mycounter>0) {

                    if(view<768){

                        addToCart2.style.width = "150px";
                        addToCart2.style.backgroundColor = "grey";
                        addToCart2.style.display = "inline-grid";
                        addToCart2.style.height = "5px";
                        addToCart2.style.paddingTop = "20px";
                        addToCart2.style.paddingBottom = "20px";
                        addToCart2.style.color = "white";
                        addToCart2.textContent = "Remove";
                        addToCart2.style.border = "none";
                        addToCart2.style.cursor = "pointer";
                        
                        
                        var image = document.createElement('img');
                        
                        image.src = '../images/remove.svg';
                        image.style.height= "40px";
                        image.style.width= "60px";
                        image.style.paddingRight= "5px";
                        image.style.marginTop= "-27px";
                        image.style.marginLeft = "-22px"
                        image.style.color = "black";
                        addToCart2.append(image);

                        notification2.style.cursor = "pointer";
                        notification2.style.width = "40px";
                        notification2.style.display = "inline-grid";
                        notification2.style.height = "5px";
                        notification2.style.paddingTop = "20px";
                        notification2.style.paddingBottom = "20px";
                        notification2.style.color = "black";
                        notification2.textContent = "Cart";
                        notification2.style.border = "none";
                        notification2.style.cursor = "pointer";
                    
                        var notiImage2 = document.createElement('img');
                        
                        notiImage2.src = '../images/noti.png';
                        notiImage2.style.height= "15px";
                        notiImage2.style.width= "15px";
                        notiImage2.style.marginTop = "-25px";
                        notiImage2.style.marginLeft = "33px";
                        notiImage2.style.color = "black";
                        notification2.append(notiImage2);
                        mycounter--;
                        
                 } 
              

     }  else  {
            addToCart2.textContent = "Add to Cart";
            addToCart2.style.border = "1px solid rgb(172, 13, 13)";
            addToCart2.style.backgroundColor = "white";
            addToCart2.style.color = "rgb(172, 13, 13)";
            notification.textContent = "Cart";
            addToCart2.style.paddingTop = "10px";
            addToCart2.style.width = "120px";
            mycounter++;
    
            
        }
   

}


