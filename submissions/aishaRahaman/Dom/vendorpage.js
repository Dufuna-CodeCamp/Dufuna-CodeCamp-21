const but = document.querySelectorAll('.but');

but.forEach(function(item){
    item.addEventListener('click', count)
});
        function count(){
            var change = this.innerHTML;
                if(change == 'Add to Cart'){
                    this.innerHTML = '<img src = "./images/remove.svg" style = "width: 20%; margin: -5px 5px -4px -7px;"/> Remove';

                    document.getElementById('cart').style= "height: 8px; width: 8px; background-color: rgba(165, 42, 42, 0.864); border-radius: 50%; display: inline-block"; 
                    this.style = 'background-color: gray; color: white; border: 0px solid white';
                    this.classList.remove('item');

                }else if(change.includes('Remove') == true){
                    this.innerHTML = 'Add to Cart';
                    this.style = 'backgroundColor: #fff; color: rgba(165, 42, 42, 0.864); border: 1px solid brown';
                    this.classList.add('item');

                }else{
                    return false;
                }

                clear()
        }

        function clear(){
            var crt = document.getElementById('cart1').innerHTML;
            var crt1 = document.getElementById('cart2').innerHTML;
            var crt2 = document.getElementById('cart3').innerHTML;
            var crt3 = document.getElementById('cart4').innerHTML;
            var crt4 = document.getElementById('cart5').innerHTML;
            var crt5 = document.getElementById('cart6').innerHTML;
            var crt6 = document.getElementById('cart7').innerHTML;
            var crt7 = document.getElementById('cart8').innerHTML;

            if((crt == 'Add to Cart') && (crt1 == 'Add to Cart') && (crt2 == 'Add to Cart') && (crt3 == 'Add to Cart') && (crt4 == 'Add to Cart') && (crt5 == 'Add to Cart') && (crt6 == 'Add to Cart') && (crt7 == 'Add to Cart')) {
                document.getElementById('cart').style = '';
            }

        }