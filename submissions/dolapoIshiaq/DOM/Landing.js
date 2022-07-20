let place= document. getElementById("location");
    interest = document. querySelectorAll('.order-list');

    place.addEventListener("change", function(){
        for(i=0; i<interest.length; i++){
            interest[i].children[0].style.display = 'none';
            interest[i].children[1].style.display = 'block';
            interest[i].children[2].style.color = '#AD4C4C';
            interest[i].children[3].style.color = '#696969';
            
            interest[i].addEventListener('click', function(){
                location.href= '../css-Folder/vendor.html';
            })
        }
        
    })
    