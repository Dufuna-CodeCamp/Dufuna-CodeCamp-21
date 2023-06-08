/* 
let inputField = document.getElementById('address'),
    interestImgField = document.querySelectorAll('.interestImg'),
    interestField = document.querySelectorAll('.interest');



inputField.addEventListener('change', function(){
    interestImgField.forEach(function(element){
        element.style.filter = 'none';
        interestField.forEach((node) => {
            node.querySelector('h4').style.color = 'brown';
        });
    });
});


interestField.forEach(function(element){
    element.addEventListener('click', function(){
        if (interestImgField[0].style.filter === 'none'){
            console.log('in');
            window.location.href = '../css/vendors.html';  
        }
    });
});











 */