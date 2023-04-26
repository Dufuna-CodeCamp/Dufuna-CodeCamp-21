let deliveryLocation = document.getElementById('deliveryLocation');
let img = document.querySelectorAll('#img');
let colorInterest = document.querySelectorAll('#col');
let card = document.querySelectorAll('.card');
let images = ['images/fast-food.svg',  'images/Vegetables & Drinks.svg', 'images/Drinks & Cocktails.svg', 'images/resturant.svg' ]


function locationPicking() {

    for ( i = 0; i < img.length; i++) {
        img[i].src = images[i];
        colorInterest[i].style.color = 'red';
    }

for(let p = 0; p < card.length; p++){
    card[p].onclick = () => location.href = 'vendor.html';
    card[p].style.cursor = 'pointer'
}
}
deliveryLocation.addEventListener('change', locationPicking )

