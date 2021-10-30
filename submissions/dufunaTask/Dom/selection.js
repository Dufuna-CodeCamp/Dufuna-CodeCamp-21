var elem = document.getElementById("select_service");
elem.onchange = function(){
    var hiddenDiv = document.getElementById("active");
    var showDiv = document.getElementById('inactive');
    hiddenDiv.style.display = (this.value == "") ? "none":"flex";
    showDiv.style.display = (this.value == "") ? "flex":"none";
};