var btn = document.getElementsByClassName("btn");
var remove = document.getElementsByClassName("remove");
var notify = document.getElementsByClassName("notify");

var notification = 0;
function getNotify() {
  if (notification == 0) {
    notify[0].textContent = " ";
  } else {
    notify[0].textContent = "*";
  }
}
for (let i = 0; i < remove.length; i++) {
  remove[i].style.display = "none";
}
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].style.display = "none";

    var removeNext = btn[i].nextElementSibling;
    removeNext.style.display = "block";

    notification += 1;
    getNotify();
  });
}

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    remove[i].style.display = "none";
    var Addbtn = remove[i].previousElementSibling;
    Addbtn.style.display = "block";

    notification -= 1;
    getNotify();
  });
}