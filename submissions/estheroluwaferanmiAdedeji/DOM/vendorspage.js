let grid = document.querySelectorAll(".package-grid");
let dot = document.querySelector(".cart-dot");
let cart = [];

grid.forEach((grids) => {
  const button = grids.querySelector("button");
  button.addEventListener("click", () => {
    if (button.innerHTML == "Add to Cart") {
      button.innerHTML = `<img src="../CSS/images/remove.svg" width="24px" alt="remove"><span>Remove</span>`;
      button.classList.add("remove-button");
      cart.push("added");
    } else {
      cart.pop();
      button.innerHTML = "Add to Cart";
      if (button.classList.contains("remove-button")) {
        button.classList.remove("remove-button");
      }
      button.classList.add("add-button");
    }
    if (cart.length > 0) {
      dot.style.display = "inline";
    } else {
      dot.style.display = "none";
    }
  });
});





// let grid = document.querySelectorAll(".package-grid");
// let dot = document.querySelector(".cart-dot");
// let cart = [];

// grid.forEach((grids) =>{
//   let button = grids.querySelector("button");
//   button.addEventListener("click", () => {
//     if (button.innerHTML == "Add to Cart") {
//       button.innerHTML = `<img src=""../CSS/images/remove.svg width= "24px" alt="remove" <span>Remove</span>`;
//       button.classList.add("remove-btn");
//       cart.push("added");
//     } else {
//       cart.pop();
//       button.innerHTML("Add to Cart");
//       if (button.classList.contains("remove-btn")) {
//         button.classList.remove("remove-btn");
//       }
//       button.classList.add("add-btn");
//     }
//     if (cart.length > 0) {
//       dot.style.display = "inline";
//     } else {
//       dot.style.display = "none"
//     }

//   });
// });