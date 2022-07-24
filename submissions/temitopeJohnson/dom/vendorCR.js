var nameCRIds = ['namesCR', 'names2CR', 'names3CR', 'names4CR'];
var imageCRIds = ['imagesCR', 'images2CR', 'images3CR', 'images4CR'];
var priceCRIds = ['pricesCR', 'prices2CR', 'prices3CR', 'prices4CR'];


const productListCR = [
    {
        productName: 'Refuel Max',
        imageUrl: './images/CR1.svg',
        productPrice: '#1,200',
    },/*an object containing the product details*/
    {
        productName: 'Express meal',
        imageUrl: './images/CR2.svg',
        productPrice: '#2,000',
    },/*an object containing the product details*/
    {
        productName: 'Citizen meal',
        imageUrl: './images/CR3_4.svg',
        productPrice: '#1,500',
    },/*an object containing the product details*/
    {
        productName: 'Crunchy wings',
        imageUrl: './images/CR3_4.svg',
        productPrice: '#1,750',
    },/*an object containing the product details*/
]; /*an array with objects*/


for (let i = 0; i < nameCRIds.length; i++) {
    document.getElementById(imageCRIds[i]).src = productListCR[i].imageUrl;
    document.getElementById(nameCRIds[i]).innerHTML = productListCR[i].productName;
    document.getElementById(priceCRIds[i]).innerHTML = productListCR[i].productPrice;
}



let addCR = document.getElementById('AddCR'),
    rmvIconCR = document.getElementById('rmvIconCR'),
    rmvTxtCR = document.getElementById('rmvCR');

function addedCR() {
    rmvIconCR.style.display = 'inline';
    rmvTxtCR.innerHTML = 'Remove';
    addCR.style.backgroundColor = 'gray';
    addCR.style.color = 'white';
    addCR.style.border = 'none';
}

function removedCR() {
    rmvTxtCR.innerHTML = 'Add to Cart';
    rmvIconCR.style.display = 'none';
    addCR.style.backgroundColor = '#ffffff';
    addCR.style.color = '#AD4C4C';
    addCR.style.border = 'solid';
    addCR.style.borderColor = '#AD4C4C';
    addCR.style.borderWidth = '1px';
    addCR.style.borderRadius = '3px';
}

function changeCR() {
    if (rmvIconCR.style.display === 'none') {
        addedCR();
        cartFilled();
    } else {
        removedCR();
        cartFilled();
    }
}


let add2CR = document.getElementById('Add2CR'),
    rmvIcon2CR= document.getElementById('rmvIcon2CR'),
    rmvTxt2CR = document.getElementById('rmv2CR');

function added2CR() {
    rmvIcon2CR.style.display = 'inline';
    rmvTxt2CR.innerHTML = 'Remove';
    add2CR.style.backgroundColor = 'gray';
    add2CR.style.color = 'white';
    add2CR.style.border = 'none';
}

function removed2CR() {
    rmvTxt2CR.innerHTML = 'Add to Cart';
    rmvIcon2CR.style.display = 'none';
    add2CR.style.backgroundColor = '#ffffff';
    add2CR.style.color = '#AD4C4C';
    add2CR.style.border = 'solid';
    add2CR.style.borderColor = '#AD4C4C';
    add2CR.style.borderWidth = '1px';
    add2CR.style.borderRadius = '3px';
}

function change2CR() {
    if (rmvIcon2CR.style.display === 'none') {
        added2CR();
        cartFilled();
    } else {
        removed2CR();
        cartFilled();
    }
}


let add3CR = document.getElementById('Add3CR'),
    rmvIcon3CR = document.getElementById('rmvIcon3CR'),
    rmvTxt3CR = document.getElementById('rmv3CR');

function added3CR() {
    rmvIcon3CR.style.display = 'inline';
    rmvTxt3CR.innerHTML = 'Remove';
    add3CR.style.backgroundColor = 'gray';
    add3CR.style.color = 'white';
    add3CR.style.border = 'none';
}

function removed3CR() {
    rmvTxt3CR.innerHTML = 'Add to Cart';
    rmvIcon3CR.style.display = 'none';
    add3CR.style.backgroundColor = '#ffffff';
    add3CR.style.color = '#AD4C4C';
    add3CR.style.border = 'solid';
    add3CR.style.borderColor = '#AD4C4C';
    add3CR.style.borderWidth = '1px';
    add3CR.style.borderRadius = '3px';
}

function change3CR() {
    if (rmvIcon3CR.style.display === 'none') {
        added3CR();
        cartFilled();
    } else {
        removed3CR();
        cartFilled();
    }
}


let add4CR = document.getElementById('Add4CR'),
    rmvIcon4CR = document.getElementById('rmvIcon4CR'),
    rmvTxt4CR = document.getElementById('rmv4CR');

function added4CR() {
    rmvIcon4CR.style.display = 'inline';
    rmvTxt4CR.innerHTML = 'Remove';
    add4CR.style.backgroundColor = 'gray';
    add4CR.style.color = 'white';
    add4CR.style.border = 'none';
}

function removed4CR() {
    rmvTxt4CR.innerHTML = 'Add to Cart';
    rmvIcon4CR.style.display = 'none';
    add4CR.style.backgroundColor = '#ffffff';
    add4CR.style.color = '#AD4C4C';
    add4CR.style.border = 'solid';
    add4CR.style.borderColor = '#AD4C4C';
    add4CR.style.borderWidth = '1px';
    add4CR.style.borderRadius = '3px';
}

function change4CR() {
    if (rmvIcon4CR.style.display === 'none') {
        added4CR();
        cartFilled();
    } else {
        removed4CR();
        cartFilled();
    }
}


// let filledCartImg = document.getElementById('filledCartImg');

// function cartFilledCR() {
//     if (rmvIcon4CR.style.display === 'inline' || rmvIcon3CR.style.display === 'inline' || rmvIcon2CR.style.display === 'inline' || rmvIconCR.style.display === 'inline') {
//         filledCartImg.style.display = 'inline';
//     } else {
//         filledCartImg.style.display = 'none';
//     }
// }