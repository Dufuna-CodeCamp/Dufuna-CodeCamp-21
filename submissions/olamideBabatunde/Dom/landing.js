var select = document.querySelector("select");
var firstCard = document.getElementsByClassName("first-card");
var firstCardImg1 = document.getElementsByClassName("img1");
var firstCardImg2 = document.getElementsByClassName("img2");
var title = document.getElementsByClassName("title");
if (select.selectedIndex === 0) {
  for (let i = 0; i < firstCardImg1.length; i++) {
    firstCardImg1[i].style.display = "block";
  }
  for (let i = 0; i < firstCardImg2.length; i++) {
    firstCardImg2[i].style.display = "none";
  }
}

select.addEventListener("click", function () {
  if (select.selectedIndex >= 1) {
    for (let i = 0; i < firstCardImg1.length; i++) {
      firstCardImg1[i].style.display = "none";
    }
    for (let i = 0; i < firstCardImg2.length; i++) {
      firstCardImg2[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < firstCardImg1.length; i++) {
      firstCardImg1[i].style.display = "block";
    }
    for (let i = 0; i < firstCardImg2.length; i++) {
      firstCardImg2[i].style.display = "none";
    }
  }
});

select.addEventListener("click", function () {
  if (select.selectedIndex >= 1) {
    for (let i = 0; i < title.length; i++) {
      title[i].classList.toggle("toggletitle");
      title[i].style.color = "#ad4c4c";
    }
  }
});