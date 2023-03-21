const button = document.querySelectorAll('.btn');
const check = document.getElementById('check');
// console.dir(check)

button.forEach((rem) => {
    rem.addEventListener('click', function () {
        if (rem.innerHTML == 'Add to Cart') {
            rem.innerHTML = '<img src="./images/remove.svg" alt="" style = "width: 30%; margin: -5px 5px -5px -5px; color: #fff" class = "remove">Remove';
            rem.style.display = 'flex';
            rem.style.justifyContent = 'space-around';
            rem.style.alignItems = 'center';
            rem.style.backgroundColor = '#a5a5a5';
            rem.style.color = '#fff';
            rem.style.border = 'none'
        } else if (rem.innerText == 'Remove') {
            rem.innerHTML = 'Add to Cart';
            rem.style.backgroundColor = '#fff';
            rem.style.color = '#ad4c4c';
            rem.style.border = '1.5px solid #ad4c4c'
        }

        const cartList = document.querySelectorAll('.remove').length;

        console.log(cartList)

        if (cartList > 0) {
            check.style.display = 'inline'
        } else {
            check.style.display = 'none'
        }
    })
})
