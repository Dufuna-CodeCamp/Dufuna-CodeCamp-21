"use strict";

const pageData = {
  kfc: [
    {
      id: "kfc1",
      foodImg: "./img/image4.svg",
      foodName: "KFC - King Bucket",
      foodPrice: 5000,
    },
    {
      id: "kfc2",
      foodImg: "./img/image4.svg",
      foodName: "Zinger Burger",
      foodPrice: 3600,
    },
    {
      id: "kfc3",
      foodImg: "./img/image4.svg",
      foodName: "Chicken strips",
      foodPrice: 1450,
    },
    {
      id: "kfc4",
      foodImg: "./img/image4.svg",
      foodName: "Yamilicious",
      foodPrice: 900,
    },
  ],

  chickenRepublic: [
    {
      id: "cr1",
      foodImg: "./img/image1.svg",
      foodName: "Refuel Max",
      foodPrice: 1200,
    },
    {
      id: "cr2",
      foodImg: "./img/image2.svg",
      foodName: "Express meal",
      foodPrice: 2000,
    },
    {
      id: "cr3",
      foodImg: "./img/image3.svg",
      foodName: "Citizen meal",
      foodPrice: 1500,
    },
    {
      id: "cr4",
      foodImg: "./img/image1.svg",
      foodName: "Crunchy wings",
      foodPrice: 1750,
    },
  ],
};

//  Elements Selection
const kfcFoods = document.querySelector(".items");
const chickenRepublicFoods = document.querySelector(".itemsDe");

// Function to display foods in both restaurants

const handleFoodsDisplay = function (foodsData, foodsContainer) {
  foodsContainer.innerHTML = foodsData
    .map(
      (food) => `
      <div class="item">
        <img src="${food.foodImg}" alt=${food.foodName} />
          <div class="card">
           <div class="description">
              <span>${food.foodName}</span>
                <div class="price">#${food.foodPrice}</div>
                  </div>
            <div><button id="${food.id}" class="card-btn add-item" >Add to Cart</button></div>
            </div>
      </div>
    `
    )
    .join("");
};

// Displaying foods in kfc-food container
handleFoodsDisplay(pageData.kfc, kfcFoods);

//Displaying foods in chick-republic-foods container
handleFoodsDisplay(pageData.chickenRepublic, chickenRepublicFoods);

// Add to cart btns selection
const addCartBtns = document.querySelectorAll(".card-btn");
const cartsContainer = document.querySelector(".cart-items");
// const toggleCardBtn =

// Cart Items
const cartItems = [];
// An Array of all the foods
const allFoodsArr = [...pageData.kfc, ...pageData.chickenRepublic];
// console.log(allFoodsArr);

// function to show cart dot and change add cart btn

const handleCartBtnChangeShowCartDot = (
  cartHasItems = false,
  clickedBtnId = null,
  status = ""
) => {
  let clickedBtn;
  if (cartHasItems) {
    document.querySelector(".cart-dot").style.visibility = "visible";
  } else {
    document.querySelector(".cart-dot").style.visibility = "hidden";
  }
  if (clickedBtnId && status === "add") {
    clickedBtn = document.getElementById(clickedBtnId);
    clickedBtn.classList.add("remove-item");
    clickedBtn.innerHTML = `<img src="./img/Vector.svg" alt="rm-icon" /> Remove`;
    clickedBtn.classList.add("card-btn");
  } else if (clickedBtnId && status === "remove") {
    clickedBtn = document.getElementById(clickedBtnId);
    clickedBtn.textContent = "Add to Cart";
    clickedBtn.classList.remove("remove-item");
  }
};

const removeItemBtn = document.querySelectorAll(".remove-item");

// Function to remove item from cart
const removeFoodfromCart = (arr, btnId) => {
  arr.find((food, index) => {
    if (food.id === btnId) {
      arr.splice(index, 1);
    }
  });
  // displayCartItems(arr);
  handleCartBtnChangeShowCartDot(true, btnId, "remove");
};

// Function to add food to cart

const addFoodToCartFn = (btnId) => {
  cartItems.push(allFoodsArr.find((food) => food.id === btnId));

  // displayCartItems(cartItems);
  handleCartBtnChangeShowCartDot(true, btnId, "add");
  console.log(cartItems);
};

// addFoodToCartFn("kfc2");
addCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.classList);
    if (btn.classList.contains("add-item")) {
      console.log("add-cart");
      addFoodToCartFn(btn.id);
      btn.classList.replace("add-item", "remove-item");
      // displayCartItems(cartItems);
    } else if (btn.classList.contains("remove-item")) {
      btn.classList.replace("remove-item", "add-item");
      removeFoodfromCart(cartItems, btn.id);
      console.log("remove-cart");
    }

    cartItems.length === 0
      ? (document.querySelector(".cart-dot").style.visibility = "hidden")
      : null;
  });
});
