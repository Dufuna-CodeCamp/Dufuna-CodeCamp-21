    //inputField targeting the select element
let locationBar = document.getElementById('area'),
    //interestImgField targeting the image
    imgField = document.querySelectorAll('.menuImg'),
    //interestField targeting the menu card
    menuField = document.querySelectorAll('.menu');

    // inputField.addEventListener('change', function(){
    //     interestImgField.forEach(function(element){
    //         element.style.filter = 'none';
    //         interestField.forEach((node) => {
    //             node.querySelector('h4').style.color = 'brown';
    //         });
    //     });
    // });
    

    locationBar.addEventListener('change', function(){
        imgField.forEach(function(element){
            element.style.filter = "none";
            menuField.forEach((node) => {
                node.querySelector('h4').style.color = 'brown';
            });
        });
    });


    // interestField.forEach(function(element){
    //     element.addEventListener('click', function(){
    //         if (interestImgField[0].style.filter === 'none'){
    //             console.log('in');
    //             window.location.href = '../css/vendors.html';  
    //         }
    //     });
    // });
    
    
    
    menuField.forEach(function(element){
        element.addEventListener('click', function(){
            if (imgField[0].style.filter === 'none'){
                console.log('in');
                window.location.href = '../../CSS/html/vendor.html';  
            }
        });
    });
    