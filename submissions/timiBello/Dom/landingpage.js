const place = document.getElementById('where'),
  interestBox = document.getElementsByClassName('PIBOX'),
  itemName = document.querySelectorAll('.name'),
  fastFood = document.getElementById('fastfood'),
  vegetables = document.getElementById('vegetables'),
  drinks = document.getElementById('drinks'),
  restaurant = document.getElementById('resturant');

place.addEventListener('input', (e) => {
  if (e.target.list !== ' ') {
    fastFood.src = 'img/fast-food.svg';
    vegetables.src = 'img/Vegetables & Drinks.svg';
    drinks.src = 'img/Drinks & Cocktails.svg';
    restaurant.src = 'img/resturant.svg';

    itemName.forEach((header) => {
      header.style.color = 'brown';
    });

    for (let i = 0; i < interestBox.length; i++) {
      interestBox[i].addEventListener('click', () => {
        window.location = 'vendor.html';
      });
    }
  }
});
