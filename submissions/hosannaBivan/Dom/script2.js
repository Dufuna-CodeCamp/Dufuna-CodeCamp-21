var boxes = document.getElementsByClassName("f");
var newBoxes = document.getElementsByClassName("g");


for(var box of boxes){
    box.addEventListener('click', this.makeSelection);
    
}

for(var newBox of newBoxes){
    newBox.addEventListener('click', this.undoSelection);
    
}

function makeSelection(){
    for(var box of boxes){
        box.style.display = "none";

    }
    for(var newBox of newBoxes){
        newBox.style.display = "block"

    }
}

function undoSelection(){
    for(var newBox of newBoxes){
        newBox.style.display = "none"
    }

    for(var box of boxes){
        box.style.display = "block";
    }
    
}