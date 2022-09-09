    //inputField targeting the select element
let locationBar = document.getElementById('area')
    //interestImgField targeting the image
  let  imgField = document.querySelectorAll('.menuImg')
    //interestField targeting the menu card
   let menuField = document.querySelectorAll('.menu');

    
    

    locationBar.addEventListener('change', function(){
        imgField.forEach(function(element){
            element.style.filter = "none";
            menuField.forEach((node) => {
                node.querySelector('h4').style.color = 'brown';
            });
        });
    });


    
    
    
    
    menuField.forEach(function(element){
        element.addEventListener('click', function(){
            if (imgField[0].style.filter === 'none'){
                console.log('in');
                window.location.href = '../../CSS/html/vendor.html';  
            }
        });
    });
    