const clickAnchor = document.querySelectorAll(".button");
const notify = document.querySelector(".notification");
let notifyCount = 0;

for (let button of clickAnchor) {
  console.log(button);
  const clickAdd = button.firstElementChild;
  const clickRemove = button.lastElementChild;

  button.addEventListener("click", function () {
    if (button.innerText === "Add to Cart") {
      clickAdd.style.display = `none`;
      clickRemove.style.display = `inline-block`;
      notify.style.display = `inline-block`;
      notifyCount++;
      notify.innerText = notifyCount;
    } else if (button.innerText === "Remove") {
      clickAdd.style.display = `inline-block`;
      clickRemove.style.display = `none`;
      notifyCount--;
      notify.innerText = notifyCount;
    }
    if (notifyCount <= 0) {
      notify.style.display = `none`;
    }
  });
}
