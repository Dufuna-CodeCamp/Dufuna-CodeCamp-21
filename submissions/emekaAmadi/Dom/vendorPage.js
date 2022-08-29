const add_btn= document.querySelectorAll(".add_btn")
const dot=document.querySelector(".noDot")




add_btn.forEach((item)=>(item.addEventListener("click", function(){
   if(item.innerText=== "Add to Cart"){
    item.classList.remove("add_btn");
    item.classList.add("remove_btn");
    item.innerHTML=`<img class="btn_img" src="../images/Vector (2).svg"/> Remove`;
    // dot.classList.remove("noDot")
    dot.classList.add("dot")
   }
       else if(item.innerText==="Remove"){
            item.classList.remove("remove_btn");
            item.classList.add("add_btn");
            item.innerText="Add to Cart";
        }
     
      let btn_count =document.querySelectorAll(".btn_img").length
      console.log(btn_count)
      if(btn_count > 0){
        
        dot.classList.remove("noDot")
        dot.classList.add("dot")
      } else{
        dot.classList.remove("dot")
        dot.classList.add("noDot")
      }
})))

    