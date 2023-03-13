
const menu = document.querySelectorAll('.menu');
menu.forEach(function(loc){
    loc.addEventListener('click', addy);
})

function addy(e){
    var orderAddy = document.forms['address-tag']['input-tag'].value;

    if(orderAddy === ''){
        alert('Please enter your delivery address')
         e.preventDefault();
         return false;

    }else{
        return true;
    }  
}


let active = document.forms['address-tag'];
active.addEventListener('change', color);

function color(){
    const orderAddy = document.forms['address-tag']['input-tag'].value;

    if(orderAddy !== ''){

        document.getElementById('img1').src = "./images/fast-food.svg";
       
        document.getElementById('text1').style.color = 'brown';
       
        
        document.getElementById('img2').src = "./images/Vegetables & Drinks.svg";
        document.getElementById('text2').style.color = 'brown';
        

        document.getElementById('img3').src = "./images/Drinks & Cocktails.svg";
        document.getElementById('text3').style.color = 'brown';
        

        document.getElementById('img4').src = "./images/resturant.svg";
        document.getElementById('text4').style.color = 'brown'

       
        
        
    }else{
        document.getElementById('img1').src = "./images/fast-food_disabled.svg";
        document.getElementById('text1').style.color = '#696969';
       
        
        document.getElementById('img2').src = "./images/Vegetables & Drinks_disabled.svg";
        document.getElementById('text2').style.color = '#696969';
       
        
        document.getElementById('img3').src = "./images/Drinks & Cocktails_disabled.svg";
        document.getElementById('text3').style.color = '#696969';
       
        
        document.getElementById('img4').src = "./images/resturant_disabled.svg";
        document.getElementById('text4').style.color = '#696969';
       
        
        return false;
    } 
}