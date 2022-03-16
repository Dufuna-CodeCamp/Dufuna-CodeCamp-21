let selectlocation = document.getElementById("selectLocation");
let list = document.querySelectorAll(".list");

selectlocation.addEventListener("change",function(){
    list.forEach(function(i){
        i.children[0].style.display = "none"
        i.children[1].style.display = "block"
        i.children[2].style.color = "#AD4C4C";
        i.children[3].style.color="#696969";
        i.addEventListener("click", function(){
            location.href = "../../css/html/vendor.html"
        })
    })
})
