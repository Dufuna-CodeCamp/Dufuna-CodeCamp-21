let cartCount = 0;
const vendor = document.querySelectorAll('.menu-btn');
cartNot = document.querySelector('.cart');

vendor.forEach(button => {
    button.addEventListener('click', function() {
        button.classList.toggle('added_to_cart');
        if (button.className === 'menu-btn added_to_cart') {
            button.innerHTML = '<img src="imgs/remove.svg"/> Remove';
            cartCount++;
        } else {
            button.innerText = 'Add to Cart';
            cartCount--;
        }

        if (cartCount != 0) {
            cartNot.classList.add('item-added');
        } else {
            cartNot.classList.remove("item-added");
        }
    });
});
 