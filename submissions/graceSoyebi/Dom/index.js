//to get DOM node
let addresslist = document.getElementById('delivery-addr'),
    interestImg = document.querySelectorAll('.image-class'),
    interest = document.querySelectorAll('.div-interest');

//to change image to color and change text to colored
addresslist.addEventListener('change', function(){
    interestImg.forEach(function(element){
        element.style.filter = 'none';
        interest.forEach((node) => {
            node.querySelector('p').style.color = 'brown';
        });
    }); });

//to make clickable
interest.forEach(function(element){
    element.addEventListener('click', function(){
        if (interestImg[0].style.filter === 'none'){
            console.log('in');
            window.location.href = '/css/HTML/vendorsPage.html';  
        }
    });
});

