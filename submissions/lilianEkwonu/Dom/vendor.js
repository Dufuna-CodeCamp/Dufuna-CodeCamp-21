document.addEventListener("DOMContentLoaded", function () {
  const foodItems = document.querySelectorAll('.food-box');
  const cartNotificationDot = document.getElementById('notify');
  let selectedItems = [];

  function updateCart() {
    cartNotificationDot.style.display = selectedItems.length > 0 ? 'inline' : 'none';
  }

  function toggleCartItem(index) {
    if (selectedItems.includes(index)) {
      selectedItems = selectedItems.filter(itemIndex => itemIndex !== index);
    } else {
      selectedItems.push(index);
    }
    updateCart();
    updateFoodItemButtons();
  }

  function updateFoodItemButtons() {
    foodItems.forEach((item, index) => {
      const addButton = item.querySelector('.add');
      const isSelected = selectedItems.includes(index);
      if (isSelected) {
        addButton.textContent = 'Remove'; // Change the button text to "Remove"
        addButton.style.backgroundColor = '#a5a5a5';
        addButton.style.color = '#fff';
      } else {
        addButton.textContent = 'Add to Cart'; // Change the button text back to "Add to Cart"
        addButton.style.backgroundColor = 'transparent';
        addButton.style.color = '#ad4c4c';
        addButton.style.border = '1px solid #ad4c4c';
      }
    });
  }

  foodItems.forEach((item, index) => {
    const addButton = item.querySelector('.add');
    addButton.addEventListener('click', () => {
      toggleCartItem(index);
    });
  });
});
