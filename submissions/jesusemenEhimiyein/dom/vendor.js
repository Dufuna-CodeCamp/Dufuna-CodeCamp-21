let changeButton = document.querySelectorAll('.adBtn'), //adField
    addCart = document.getElementById('cartActive'); //cartAdd
//  let addItems = document.querySelector('.aditem');


    changeButton.forEach(function(btn){
        btn.addEventListener('click', function(){
            var txt = btn.innerHTML;
            if (txt == 'Add to Cart') {
                btn.innerHTML = '<span class="draw"></span> Remove';
                btn.style.background = 'gray';
                btn.style.border = 'none';
                btn.style.color = 'white';
                btn.style.height = '28px';
                addCart.style.background = 'brown';
              
            }else{
                btn.innerHTML = 'Add to Cart';
                btn.style.background = 'transparent';
                btn.style.border = '1px solid brown';
                btn.style.color = 'brown';
                var evaluator = function(){
                    for (var i = 0; i < changeButton.length; i++){
                        if (changeButton[i].innerHTML == '<span class="draw"></span> Remove') {
                            return true;
                        }
                    }
                    return false;
                }
                if(!evaluator()){
                    addCart.style.background = 'transparent'; 
                }
            }
        });
    });








