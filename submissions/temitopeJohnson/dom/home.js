let validLocation = !!document.getElementById('Location').value;
console.log(validLocation);

function validateAddress() {
    document.getElementById('image1').src = "./images/fast-food.svg";
    document.getElementById('image2').src = "./images/Vegetables _ Drinks.svg";
    document.getElementById('image3').src = "./images/Drinks _ Cocktails.svg";
    document.getElementById('image4').src = "./images/resturant.svg";
    document.getElementById('heading1').style.color = '#AD4C4C';
    document.getElementById("heading2").style.color = '#AD4C4C';
    document.getElementById("heading3").style.color = '#AD4C4C';
    document.getElementById("heading4").style.color = '#AD4C4C';
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
    document.getElementById('btn4').disabled = false;
    return true;
}

// function goToVendors() {
//     window.location.href = "./vendors.html";
// }