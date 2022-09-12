const currentDeliveryLocation = document.querySelector(".location");
const foodImages = document.querySelectorAll(".interest-images");
const interest = document.querySelectorAll(".interest-container");


// console.log(currentDeliveryLocation, foodImages, interest);
// span = document.querySelector(".span");

const domChanges = function () {
  for (let i = 0; i < foodImages.length, i < interest.length; i++) {
    let imageSource = foodImages[i].attributes.src;
    let sourceValue = imageSource.value;
    let mainImgParent = interest[i];

    if (currentDeliveryLocation.value) {
      imageSource.textContent = sourceValue.replace("_disabled", "");
      mainImgParent.children[1].style.color = "#AD4C4C";
      mainImgParent.children[2].style.color = "#696969";
      mainImgParent.style.cursor = "pointer";
      // mainImgParent.onclick = () => (location.href = "vendor.html");
      // span.textDetails = "";
    } else {
      imageSource.textContent = sourceValue
        .replace(".svg", "")
        .concat(`_disabled.svg`);
      mainImgParent.children[1].style.color = "#A5A5A5";
      mainImgParent.children[2].style.color = "#A5A5A5";
      mainImgParent.style.cursor = "auto";
      mainImgParent.onclick = () => (location.href = "../html/vendor.html");
    }
  }
};

currentDeliveryLocation.addEventListener("change", domChanges);
