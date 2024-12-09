
let 
greyImgs = document.querySelector(".greyImg");
addresses = document.getElementById("address");

items = document.querySelectorAll('#myList li .pop a');

addresses.addEventListener('change', function(){
	
	 document.getElementsByTagName("div")[2].removeAttribute("class"); 

	items.forEach(item => {
    item.classList.remove("disabled"); 
    //console.log(item);
});
})
