let address = document.getElementById('address'),
choiceList = document.querySelectorAll('.choice'),
fastFood = document.getElementById("ff"),
veggies = document.getElementById("vf"),
drinks = document.getElementById("dc"),
restaurant = document.getElementById("res"),
menu = document.querySelectorAll('.blur');


address.addEventListener('input', address =>{
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
    }
})


