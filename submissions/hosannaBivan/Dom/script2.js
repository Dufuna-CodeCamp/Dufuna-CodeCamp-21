var boxes = document.getElementsByClassName("f");
var newBoxes = document.getElementsByClassName("g");


for(var box of boxes){
    box.addEventListener('mouseover', makeSelection);
    
}

for(var newBox of newBoxes){
    newBox.addEventListener('mouseover', undoSelection);
    
}



function makeSelection(){
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener('click', function(e){
            e.preventDefault();
            
            const displayOld = boxes[i]
            const displayNew = newBoxes[i];
            
            displayOld.style.display = "none";
            displayNew.style.display = "block";
            
        })
    }
 
        
}



function undoSelection(){

for(let i=0; i<newBoxes.length; i++){
    newBoxes[i].addEventListener('click', function(e){
        e.preventDefault();
        
        
        const displayOld = boxes[i]
        const displayNew = newBoxes[i];
        
        displayOld.style.display = "block";
        displayNew.style.display = "none";
    })
}

    
}