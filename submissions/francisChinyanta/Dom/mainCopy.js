
let 
 buttons = document.querySelectorAll(".i_2z #top")
 newDiv = document.querySelectorAll("#zip")
 cartDisplay = document.querySelector(".cart_dot");
 


buttons.forEach((button) => {
    button.addEventListener('click', function(){
      //alert(button.innerText + " was clicked");

	  console.dir(newDiv);
    });
});


function toggleButtons(clicked) {
            const button1 = document.getElementById('button1');
            const button2 = document.getElementById('button2');
			
			const button3 = document.getElementById('button3');
            const button4 = document.getElementById('button4');
			


        
			 if(clicked == "button1"){
				button1.classList.toggle('btn-stnd');
				button2.classList.toggle('btn-stnd');
				button2.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if (clicked == "button2"){
				button1.classList.toggle('btn-stnd');
				button2.classList.toggle('btn-stnd');
				button2.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			} else if (clicked == "button3"){
				button3.classList.toggle('btn-stnd');
				button4.classList.toggle('btn-stnd');
				button4.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if(clicked == "button4"){
				button3.classList.toggle('btn-stnd');
				button4.classList.toggle('btn-stnd');
				button4.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			} else if (clicked == "button5"){
				button5.classList.toggle('btn-stnd');
				button6.classList.toggle('btn-stnd');
				button6.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if (clicked == "button6"){
				button5.classList.toggle('btn-stnd');
				button6.classList.toggle('btn-stnd');
				button6.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			} else if (clicked == "button7"){
				button7.classList.toggle('btn-stnd');
				button8.classList.toggle('btn-stnd');
				button8.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if (clicked == "button8"){
				button7.classList.toggle('btn-stnd');
				button8.classList.toggle('btn-stnd');
				button8.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			} else if (clicked == "button9"){
				button9.classList.toggle('btn-stnd');
				button10.classList.toggle('btn-stnd');
				button10.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if (clicked == "button10"){
				button9.classList.toggle('btn-stnd');
				button10.classList.toggle('btn-stnd');
				button10.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			} else if (clicked == "button11"){
				button11.classList.toggle('btn-stnd');
				button12.classList.toggle('btn-stnd');
				button12.classList.toggle('btn-stnd-display');
				cartDisplay.classList.add("cart_dot");
			} else if (clicked == "button12"){
				button11.classList.toggle('btn-stnd');
				button12.classList.toggle('btn-stnd');
				button12.classList.toggle('btn-stnd-display');
				cartDisplay.classList.toggle("cart_dot");
			}
			
        }
function removeClasses(){
	cartDisplay.classList.remove("cart_dot");
}