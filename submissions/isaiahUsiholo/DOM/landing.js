let address = document.querySelector('.input-element'),
choiceList = document.querySelectorAll('.choice'),
fastFood = document.getElementById("ff"),
veggies = document.getElementById("vf"),
drinks = document.getElementById("dc"),
restaurant = document.getElementById("res"),
menu = document.querySelectorAll('.blur');


address.addEventListener('input', () =>{
    if (address.value !== '') {
        fastFood.setAttribute('src', '../assets/fast-food.svg');
        veggies.setAttribute('src', '../assets/Vegetables & Drinks.svg');
        drinks.setAttribute('src', '../assets/Drinks & Cocktails.svg');
        restaurant.setAttribute('src', '../assets/resturant.svg');
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.color = 'crimson';
            
        };
        choiceList.forEach(choiceList => {
            choiceList.addEventListener('click', ()=> {
                window.location = 'vendorpage.html';
            })
        });
    }else{   
        console.log('empty');
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.color = 'gray';
            fastFood.setAttribute('src', '../assets/fast-food_disabled.svg');
            veggies.setAttribute('src', '../assets/Vegetables & Drinks_disabled.svg');
            drinks.setAttribute('src', '../assets/Drinks & Cocktails_disabled.svg');
            restaurant.setAttribute('src', '../assets/resturant_disabled.svg');
            window.location = '';
        }
    }
})


