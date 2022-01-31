 var option = document.getElementById("address");
 option.onchange = function () {
    var inactive = document.getElementById("inactive");
     var active = document.getElementById("active");
    active.style.display = (this.value == "") ? "none" : "flex";
     inactive.style.display = (this.value == "") ? "flex" : "none";

  var menu_option_item = document.getElementsByClassName("menu_option_item");
  for (let item of menu_option_item) {
     item.classList.remove("menu_option")
     item.classList.add("menuOpt")    
     }
 };