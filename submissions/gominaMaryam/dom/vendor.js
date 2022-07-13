const vendors = document.querySelectorAll(".vendor-box");
const activeCart = document.querySelector(".active-cart");
const cart = [];

vendors.forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    if (button.innerHTML == "Add to Cart") {
      button.innerHTML = `<img src="../images/remove.svg" width="24px" alt="remove"><span>Remove</span>`;
      button.classList.add("remove-btn");
      cart.push("added");
    } else {
      cart.pop();
      button.innerHTML = "Add to Cart";
      if (button.classList.contains("remove-btn")) {
        button.classList.remove("remove-btn");
      }
      button.classList.add("add-btn");
    }
    if (cart.length > 0) {
      activeCart.style.display = "inline";
    } else {
      activeCart.style.display = "none";
    }
  });
});
