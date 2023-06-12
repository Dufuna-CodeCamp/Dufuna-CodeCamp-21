
let adField = document.querySelectorAll('.adBtn'),
    cartAdd = document.getElementById('cartSpan');


adField.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var txt = btn.innerHTML;
        if (txt == 'Add to Cart') {
            btn.innerHTML = '<span class="draw"></span> Remove';
            btn.style.background = 'gray';
            btn.style.border = 'none';
            btn.style.color = 'rgba(255, 255, 255, 1)'
            cartAdd.style.background = 'brown';
        } else {
            btn.innerHTML = 'Add to Cart';
            btn.style.background = 'transparent';
            btn.style.border = '1px solid brown';
            btn.style.color = 'brown';
            var evaluator = function () {
                for (var i = 0; i < adField.length; i++) {
                    if (adField[i].innerHTML == '<span class="draw"></span> Remove') {
                        return true;
                    }
                }
                return false;
            }
            if (!evaluator()) {
                cartAdd.style.background = 'transparent';
            }
        }
    });
});

