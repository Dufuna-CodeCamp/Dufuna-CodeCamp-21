// GET THE BUTTONS
let addButton = document.getElementsByClassName('vendor-grid-button');
let removeButton = document.getElementsByClassName('clicked-btn');

let cartPoint = document.getElementById('cart-notify');

// NUMBER OF ITEMS IN CART
let cartNum = 0;

const addToCart = () => {
  if (cartNum != 0) {
    cartPoint.style.display = 'block';
  } else {
    cartPoint.style.display = 'none';
  }
};

const clickAddButton = (e) => {
  cartNum += 1;
  e.target.style.display = 'none';
  e.target.nextElementSibling.style.display = 'flex';
  console.log(cartNum);
  addToCart();
};

const clickRemoveButton = (e) => {
  cartNum -= 1;
  e.target.style.display = 'none';
  e.target.previousElementSibling.style.display = 'block';
  console.log(cartNum);
  addToCart();
};

// ADD A CLICK EVENT
for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', clickAddButton);
}

for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener('click', clickRemoveButton);
}
