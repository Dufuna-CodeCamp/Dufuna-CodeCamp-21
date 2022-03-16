let selectlocation = document.getElementById("selectLocation");
let list = document.querySelectorAll(".list");

selectlocation.addEventListener("change",function(i){
    list.forEach(function(i){
        console.log( i.children);
        i.children[0].style.display = "none"
        i.children[1].style.display = "block"
        i.children[2].style.color = "#AD4C4C";
        i.children[3].style.color="#696969";
        i.addEventListener("click", function(e){
            location.href = "../../css/html/vendor.html"
        })
    })
})
