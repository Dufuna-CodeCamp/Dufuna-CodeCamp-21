



//associate html id's and classes to variables to be used
                let addBtn = document.querySelectorAll('.action'),
                itemIcon= document.querySelector("#cartImg");


                addBtn.forEach((item) => {
                item.addEventListener('click', function(index){         //create an event listener
                let container = index.target.closest('.action')
                container.classList.toggle("add")
                    console.dir(container);
                    let remove = container.querySelector('.remove');
                     
                    if(container.classList.contains("add")){          //verify if there exists items in a classlist

                        remove.style.visibility='visible';
                        container.querySelector('.input').value='remove';
                        container.classList.add('grey');
                        container.querySelector('.input').style.backgroundColor='grey';
                        container.querySelector('.input').style.color='white';
                        
                    }
                    else{    
                            remove.style.visibility='hidden';
                            container.querySelector('.input').value='Add to cart';
                            container.querySelector('.input').style.backgroundColor='white';
                            container.classList.remove("grey");
                            container.querySelector('.input').style.color='red';
                        }

                        displayNotification();
                })
            })

            //we use this function to check if a number of items have been added to the cart we maintain the notification  icon on  at the cart        

            function displayNotification() {
                let item = document.querySelectorAll(".add");     
                if(item.length >0) {
                
                    itemIcon.style.visibility ='visible'
                    console.log(item.length)

                } else {
                    itemIcon.style.visibility= "hidden";
                }

        }