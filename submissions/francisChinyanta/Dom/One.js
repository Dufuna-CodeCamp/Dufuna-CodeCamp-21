function toggleButtons() {
            const button1 = document.getElementById('button1');
            const button2 = document.getElementById('button2');
			
	/* 		if(button1){
				alert("Yes");
			} */
            // Toggle visibility
            button1.classList.toggle('btn-stnd');
            button2.classList.toggle('btn-stnd');
			button2.classList.toggle('btn-stnd-display');
			console.log(button1);
			console.log(button2);
			
        }