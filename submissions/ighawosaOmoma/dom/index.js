//variables
const address=document.querySelector('.address');
const oldInterest =document.querySelector('.interest');
const newInterest =document.querySelector('.interesting');

address.addEventListener('change', function(){
    oldInterest.classList.replace('interest', 'interesting');
    newInterest.classList.replace('interesting', 'interest');

    //change the color of food titles
    let h4 = document.querySelectorAll('.h4');
    h4.forEach(function(item){
        item.style.color = '#AD4C4C'

    //change cursor to pointer
    newInterest.style.cursor='pointer'
    });
});

//Redirection to vendor page
newInterest.addEventListener('click', function(){
    window.location.href='../HTML/vendor.html'
});