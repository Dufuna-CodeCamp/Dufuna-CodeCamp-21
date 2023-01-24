let locationOne = document.getElementById("location1");
let interestBox = document.querySelectorAll(".box");
let images = document.querySelectorAll(".images");
console.log(images);

locationOne.addEventListener("change", () => {
  images.forEach((element) => {
    image = element.getAttribute("src").replace("_disabled", "");
    element.setAttribute("src", image);
  });
  interestBox.forEach((element) => {
    element.querySelector(".outlook").style.color = "#ad4c4c";
    element.addEventListener("click", () => {
      window.location.href = "./vendor.html";
    });
  });
});
