var boxes = document.getElementsByClassName("f");

for(var box of boxes){
    box.addEventListener('click', function makeSelection(){
        
        this.classList.toggle("display-none")
        
    });
}