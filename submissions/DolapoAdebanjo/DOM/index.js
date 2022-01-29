const selectedAddress = document.getElementById("address");
const imgBox = document.querySelectorAll(".item-img");
const imgParent = document.querySelectorAll(".opt-item");
const span = document.querySelector(".span");
const option = document.querySelectorAll(".option");
const select = document.querySelector('.select');

/*const domChanges = function () {
  if (selectedAddress.value) {
    for (let i = 0; i < imgBox.length, i < imgParent.length; i++) {
      let imgSource = imgBox[i].attributes.src;
      let sourceValue = imgSource.value; //or imgSource.textContent;
      imgSource.textContent = sourceValue.replace("_disabled", "");
      let nextChild = imgBox[i].nextElementSibling;
      nextChild.style.color = `#AD4C4C`;
      nextChild.nextElementSibling.style.color = `#696969`;
    }
    span.textContent = "";
  } 
  else if (selectedAddress.value === "") {
    for (let i = 0; i < imgBox.length; i++) {
      let imgSource = imgBox[i].attributes.src;
      let sourceValue = imgSource.value;
      imgSource.textContent = sourceValue
        .replace(".svg", "")
        .concat(`_disabled.svg`);
        let nextChild = imgBox[i].nextElementSibling;
      nextChild.style.color = `#A5A5A5`;
      nextChild.nextElementSibling.style.color = `#A5A5A5`;
    }
    span.textContent = "Select a location please";
    span.style.color = `red`;
  }
};*/

/*const domChanges = function () {
  for (let i = 0; i < imgBox.length, i < imgParent.length; i++) {
    if (selectedAddress.value) {
      let imgSource = imgBox[i].attributes.src;
      let sourceValue = imgSource.value; //or imgSource.textContent;
      imgSource.textContent = sourceValue.replace("_disabled", "");
      let nextChild = imgBox[i].nextElementSibling;
      nextChild.style.color = `#AD4C4C`;
      nextChild.nextElementSibling.style.color = `#696969`;
      span.textContent = "";
    } else {
      let imgSource = imgBox[i].attributes.src;
      let sourceValue = imgSource.value;
      imgSource.textContent = sourceValue
        .replace(".svg", "")
        .concat(`_disabled.svg`);
      let nextChild = imgBox[i].nextElementSibling;
      nextChild.style.color = `#A5A5A5`;
      nextChild.nextElementSibling.style.color = `#A5A5A5`;
      span.textContent = "Select a location please";
      span.style.color = `red`;
    }
  }
};*/

const domChanges = function () {
  for (let i = 0; i < imgBox.length, i < imgParent.length; i++) {
    let imgSource = imgBox[i].attributes.src; //Getting the src attribute of the image selected
    let sourceValue = imgSource.value; //Getting the value of the src
    let mainImgParent = imgParent[i]; //Getting each parent box of all the parent boxes array
    if (selectedAddress.value) {
      imgSource.textContent = sourceValue.replace("_disabled", "");//Remove _disabled string from the src value
      mainImgParent.children[1].style.color = `#AD4C4C`;
      mainImgParent.children[2].style.color = `#696969`;
      mainImgParent.style.cursor = `pointer`;
      mainImgParent.onclick = () => location.href = `../html/vendor.html`;
      span.textContent = "";
    } else {
      imgSource.textContent = sourceValue
        .replace(".svg", "")
        .concat(`_disabled.svg`);
        mainImgParent.children[1].style.color= `#A5A5A5`;
        mainImgParent.children[2].style.color = `#A5A5A5`;
        mainImgParent.style.cursor = `auto`;
      mainImgParent.onclick = () => location.href = ``;
      span.textContent = "Select a location please";
      span.style.color = `red`;
    }
  }
};
selectedAddress.addEventListener("change", domChanges);
