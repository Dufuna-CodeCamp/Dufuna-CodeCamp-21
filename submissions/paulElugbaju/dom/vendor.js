const button = document.querySelectorAll('.btn');
const check = document.getElementById('check');
// console.dir(check)

button.forEach((rem) => {
    rem.addEventListener('click', function (e) {
        if (rem.innerHTML == 'Add to Cart') {
            rem.innerHTML = '<img src="./images/remove.svg" alt="" style = "width: 30%; margin: -5px 5px -5px -5px; color: #fff" class = "remove">Remove';
            rem.style = 'display: flex; justify-content: space-around; align-items: center; background-color: #a5a5a5; color: rgba(255, 255, 255, 1); border: none'
        } else if (rem.innerText == 'Remove') {
            rem.innerHTML = 'Add to Cart';
            rem.style = 'background-color: white; color: #ad4c4c; border: 1.5px solid #ad4c4c';
        };

        const cartList = document.querySelectorAll('.remove').length;

        console.log(cartList)

        if (cartList > 0) {
            check.style.display = 'inline'
        } else {
            check.style.display = 'none'
        }
    })
});
