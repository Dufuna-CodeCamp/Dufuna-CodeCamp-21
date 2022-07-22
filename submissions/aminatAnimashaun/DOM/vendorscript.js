window.onload = ()=>{

    /**
     * Initialise Components of Vendors Page 
     */

  const bucketBtn = document.getElementById("bucket");
  const burgerBtn = document.getElementById("burger");
  const chickenBtn = document.getElementById("chicken");
  const yamiBtn = document.getElementById("yami");
  const itemsCountDisplay = document.getElementById("itemsCount");

  let itemsCount = 0;
  let addToCart = true;
  let alterBtnText = "Remove";
  let btnText = burgerBtn.innerText;
  let addBurgerToCart = true;
  let addChickenToCart = true;
  let addYamiToCart = true;


  bucketBtn.addEventListener("click", ()=>{

    if(addToCart)
    {
        itemsCount++;
        itemsCountDisplay.innerText = "*";
        bucketBtn.innerText = alterBtnText;
        addToCart = false;

    }
    else
    {
        --itemsCount;
        bucketBtn.innerText = btnText;

        addToCart = true;

        if(itemsCount == 0 )
        {
            itemsCountDisplay.innerText = "";
        }
    }
});


burgerBtn.addEventListener("click", ()=>{

    if(addBurgerToCart)
    {
        itemsCount++;
        itemsCountDisplay.innerText = "*";
        burgerBtn.innerText = alterBtnText;
        addBurgerToCart = false;

    }
    else
    {
        --itemsCount;
        burgerBtn.innerText = btnText;

        addBurgerToCart = true;

        if(itemsCount == 0 )
        {
            itemsCountDisplay.innerText = "";
        }
    }
});

chickenBtn.addEventListener("click", ()=>{

    if(addChickenToCart)
    {
        itemsCount++;
        itemsCountDisplay.innerText = "*";
        chickenBtn.innerText = alterBtnText;
        addChickenToCart = false;

    }
    else
    {
        --itemsCount;
        chickenBtn.innerText = btnText;

        addChickenToCart = true;

        if(itemsCount == 0 )
        {
            itemsCountDisplay.innerText = "";
        }
    }
});

yamiBtn.addEventListener("click", ()=>{

    if(addYamiToCart)
    {
        itemsCount++;
        itemsCountDisplay.innerText = "*";
        yamiBtn.innerText = alterBtnText;
        addYamiToCart = false;

    }
    else
    {
        --itemsCount;
        yamiBtn.innerText = btnText;

        addYamiToCart = true;

        if(itemsCount == 0 )
        {
            itemsCountDisplay.innerText = "";
        }
    }
});

 }
 