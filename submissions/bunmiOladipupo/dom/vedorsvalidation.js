const carts = document.querySelectorAll('.cartjs');
carts.forEach((button) => {
    button.addEventListener('click', cartClick)
})
//function for all add to cart buttons + style
    function cartClick(){
        var status = this.innerHTML;        
        if (status == 'Add to Cart'){
            this.innerHTML = '<img src="../../CSS/Asset/remove.svg" style="width: 20%; margin: -5px 5px -6px -7px;"/> Remove';
            document.getElementById('count').style = 'height: 8px; width: 8px; background-color: red; border-radius: 50%; display: inline-block';
            this.style = "background-color: silver; color: #fff; border: 0px solid #fff";
            this.classList.remove('button');
        } else if (status.includes('Remove') == true){
            this.innerHTML = "Add to Cart";
            this.style = "background-color: rgba(208,208,215,0.3); color: #000; border: 1px solid red"
            this.classList.add('button');       
        } else{
            return false;
        }
        clean()   
    }
    //clean function to check cart icon
   function clean(){
        var cart1 = document.getElementById('cart5k').innerHTML;
        var cart2 = document.getElementById('cart5k2').innerHTML;
        var cart3 = document.getElementById('cart5k3').innerHTML;
        var cart4 = document.getElementById('class').innerHTML;
        var cart5 = document.getElementById('carts1').innerHTML;
        var cart6 = document.getElementById('carts2').innerHTML;
        var cart7 = document.getElementById('carts3').innerHTML;
        var cart8 = document.getElementById('carts4').innerHTML;
        if ((cart1 == 'Add to Cart') && (cart2 == 'Add to Cart') && (cart3 == 'Add to Cart') && (cart4 == 'Add to Cart') && (cart5 == 'Add to Cart') && (cart6 == 'Add to Cart') && (cart7 == 'Add to Cart') && (cart8 == 'Add to Cart')){
            document.getElementById('count').style = '';
        }
    }
    //landing page verification
    const interest = document.querySelectorAll('.trp');
    interest.forEach((button) => {
        button.addEventListener('click', nextpage)
    })
        function nextpage(e){
        var loc = document.getElementById('location').value;
        if(loc == "label"){
        alert('Please select a location');
        e.preventDefault();
        return false;
        } else{
        return true;
    }
}