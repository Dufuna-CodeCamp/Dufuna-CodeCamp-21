/*const heading = document.querySelectorAll(".heading");
console.log(heading[0]);
for(let i = 0; i < heading.length; i++){
    heading[i].style.color = "blue";
}*/

let container = document.querySelector(".container"),
first = document.querySelector("#first"),
second = document.querySelector("#second"),
newSpan = document.createElement("span");
newSpan.innerHTML = "One fc";
newSpan.style.color = "green";
first.classList.toggle("green");
/*
console.log(container);
container.insertBefore(newSpan, second);
//second.remove();
//first.classList.add("green");
//first.classList.remove("green");
 */
/* let container = document.querySelector(".container"),
first = document.querySelector("#first"),
second = document.querySelector("#second"),
btn = document.getElementById("address");
btn.addEventListener('change', function(){
	 //alert("Hello Hope")
	 second.remove();
} )  */

/* buttons = document.querySelectorAll("button");



buttons.forEach((button) => {
    button.addEventListener('click', function(){
      // alert(button.innerText + " was clicked");
	  console.dir(button);
    });
});
 */
