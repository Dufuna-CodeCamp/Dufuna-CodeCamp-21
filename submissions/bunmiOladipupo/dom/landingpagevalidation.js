//landing page verification
   const interest = document.querySelectorAll('.trp');
   interest.forEach((button) => {
       button.addEventListener('click', nextpage)
   })
   
   function nextpage(e){
    var loc = document.getElementById('location').value;
    if(loc == "label"){
    alert('Please select a location');
    e.preventDefault();
    return false;
    } else{
    return true;
}
}
let pop = document.getElementById('location');
pop.addEventListener('change',bright);
    function bright(){        
const loc = document.getElementById('location').value;
        if(loc != "label"){        
            document.getElementById('img1').src = '../Asset/fast.svg';
            document.getElementById('img2').src = '../Asset/Vegetables.svg';
            document.getElementById('img3').src = '../Asset/Drinks.svg';
            document.getElementById('img4').src = '../Asset/resturant.svg';
        } else{
            document.getElementById('img1').src = '../Asset/fast-food_disabled.svg';
            document.getElementById('img2').src = '../Asset/Vegetables & Drinks_disabled.svg';
            document.getElementById('img3').src = '../Asset/Drinks & Cocktails_disabled.svg';
            document.getElementById('img4').src = '../Asset/resturant_disabled.svg';
            return false;
        }
    }