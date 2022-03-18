var optionWrapper = document.getElementById("address");
 optionWrapper.onchange = function () {
    var inactive = document.getElementById("flex-parent-inactive");
     var active = document.getElementById("flex-parent-active");
    active.style.display = (this.value == "") ? "none" : "flex";
     inactive.style.display = (this.value == "") ? "flex" : "none";

  var menu_option_item = document.getElementsByClassName("option-wrapper");
  for (let item of option-wrapper) {
     item.classList.remove("option-wrapper")
     item.classList.add("option-wrapper")    
     }
 };