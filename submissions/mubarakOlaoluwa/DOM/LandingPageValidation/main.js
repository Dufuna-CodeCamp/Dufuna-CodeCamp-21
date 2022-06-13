
let address = document.getElementById('address');
let clickable = document.querySelectorAll('.third-grid');
let image = document.querySelectorAll('.fifth');
let names = document.querySelectorAll('.sixth');

    address.onchange = () => { 
        let addressValue = address.options[address.selectedIndex].value;

            if (addressValue > '1') {
                image[0].innerHTML = '<img src = "Images/fast-food.svg">';
                image[1].innerHTML = '<img src = "Images/Vegetables & Drinks.svg">';
                image[2].innerHTML = '<img src = "Images/Drinks & Cocktails.svg">';
                image[3].innerHTML = '<img src = "Images/resturant.svg">';
    
                names.forEach((naming) => {
                    naming.classList.remove('sixth');
                    naming.classList.add('sixth_new');
                });
               
                clickable.forEach((clicks) => {
                   clicks.onclick = () => {
                        location.href= "../Vendor_Page_Validation/index.html";  
                    };

                });
                
            } 
            else if (addressValue === '1'){
                image[0].innerHTML = '<img src = "Images/fast-food_disabled.svg">';
                image[1].innerHTML = '<img src = "Images/Vegetables & Drinks_disabled.svg">';
                image[2].innerHTML = '<img src = "Images/Drinks & Cocktails_disabled.svg">';
                image[3].innerHTML = '<img src = "Images/resturant_disabled.svg">';

                names.forEach((naming) => {
                    naming.classList.remove('sixth_new');
                    naming.classList.add('sixth');
                });

                clickable.forEach((clicks) => {
                    clicks.onclick = () => {
                         location.href= "#";  
                     };
 
                 });
                
            }
    }