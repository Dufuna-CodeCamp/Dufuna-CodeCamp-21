let button = document.querySelectorAll('.same'),
    notify = document.querySelector('.dot');


notiftyDot = () => {
    const btn = document.querySelectorAll('.no-dot')
    if (btn.length){
        notify.classList.add('cart-dot');
    }
}

button.forEach(function(same){
    same.addEventListener('click', function(){
        var word = same.innerHTML;
        if (word == 'Add to Cart'){
            same.innerHTML = '<img src = "../css/images/remove.svg" class= "remove"> Remove';
            same.style.color =  'white';
            same.style.background = 'gray';
            same.classList.add('no-dot');
        }
        else{
            same.innerHTML = 'Add to Cart';
            same.style.color =  'brown';
            same.style.background = 'transparent';
            same.style.border = '1px solid brown';
            same.classList.remove('no-dot');
            notify.classList.remove('cart-dot');         
        }
        notiftyDot();
    })
})



 // same.addEventListener('click', function(){
    //     if (same.length >= 1) {
    //         item.innerHTML = "working";
    //     }else{
    //         item.style.color = "blue";
    //         item.innerHTML = "fuck";
    //     }
          