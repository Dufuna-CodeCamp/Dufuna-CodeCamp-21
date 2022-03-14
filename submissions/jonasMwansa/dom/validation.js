
//associate html id's and classes to variables to be used
let locations = document.querySelector('#location'),
    interestClass = document.querySelectorAll('.interest-items');
    
    //any change on the form we call this anonymous function we contains the listener
    locations.onchange= function () {       
        
        document.querySelector(".interest-items").style.cursor = "pointer";

            interestClass.forEach((item) => {
                item.addEventListener('click', function(index){         //create an event listener
                let container = index.target.closest('.interest-items')
                container.classList.toggle("added")
    
                    console.dir(container);
    
                    if(container.classList.contains("added")){          //verify if there exists items in a classlist
                        window.location.assign("../html/vendors.html"); //assign a link
                    }
                });
            });
    }

   
