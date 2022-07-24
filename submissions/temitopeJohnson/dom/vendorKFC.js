var nameIds = ['names', 'names2', 'names3', 'names4'];
var imageIds = ['images', 'images2', 'images3', 'images4'];
var priceIds = ['prices', 'prices2', 'prices3', 'prices4'];


const productListKFC = [
    {
        productName: 'KFC - King Bucket',
        imageUrl: './images/Rectangle 28.svg',
        productPrice: '#5,000',
    },/*an object containing the product details*/
    {
        productName: 'Zinger Burger',
        imageUrl: './images/Rectangle 28.svg',
        productPrice: '#3,600',
    },/*an object containing the product details*/
    {
        productName: 'Chicken strips',
        imageUrl: './images/Rectangle 28.svg',
        productPrice: '#1,450',
    },/*an object containing the product details*/
    {
        productName: 'Yamilicious',
        imageUrl: './images/Rectangle 28.svg',
        productPrice: '#900',
    },/*an object containing the product details*/
]; /*an array with objects*/


for (let i = 0; i < nameIds.length; i++) {
    document.getElementById(imageIds[i]).src = productListKFC[i].imageUrl;
    document.getElementById(nameIds[i]).innerHTML = productListKFC[i].productName;
    document.getElementById(priceIds[i]).innerHTML = productListKFC[i].productPrice;
}



// let addIds = ['Add', 'Add2', 'Add3', 'Add4'],
//     rmvIconIds = ['rmvIcon', 'rmvIcon2', 'rmvIcon3', 'rmvIcon4'],
//     rmvTxtIds = ['rmvTxt', 'rmvTxt2', 'rmvTxt3', 'rmvTxt4'],
//     i, j, k;

// function added() {
//     if (((i = addIds[0]) && (j = rmvIconIds[0]) && (k = rmvTxtIds[0]))
//         || ((i = addIds[1]) && (j = rmvIconIds[1]) && (k = rmvTxtIds[1]))
//         || ((i = addIds[2]) && (j = rmvIconIds[2]) && (k = rmvTxtIds[2]))
//         || ((i = addIds[3]) && (j = rmvIconIds[3]) && (k = rmvTxtIds[3]))) {
//         console.log(i, j, k);
//         document.getElementById(j).style.display = 'inline';
//         document.getElementById(k).innerHTML = 'Remove';
//         document.getElementById(i).style.backgroundColor = 'gray';
//         document.getElementById(i).style.color = 'white';
//         document.getElementById(i).style.border = 'none';
//     }
// }
// function removed() {
//     if ((i = addIds[0]) || (i = addIds[1]) || (i = addIds[2]) || (i = addIds[3])) {
//         if ((j = rmvIconIds[0]) || (j = rmvIconIds[1]) || (j = rmvIconIds[2]) || (j = rmvIconIds[3])) {
//             if ((k = rmvTxtIds[0]) || (k = rmvTxtIds[1]), (k = rmvTxtIds[2]), (k = rmvTxtIds[3])) {
//                 document.getElementById(k).innerHTML = 'Add to Cart';
//                 document.getElementById(j).style.display = 'none';
//                 document.getElementById(i).style.backgroundColor = '#ffffff';
//                 document.getElementById(i).style.color = '#AD4C4C';
//                 document.getElementById(i).style.border = 'solid';
//                 document.getElementById(i).style.borderColor = '#AD4C4C';
//                 document.getElementById(i).style.borderWidth = '1px';
//                 document.getElementById(i).style.borderRadius = '3px';
//             }
//         }
//     }
// }

// function change() {
//     if (rmvIcon.style.display === 'none') {
//         added();
//         cartFilled();
//     } else {
//         removed();
//         cartFilled();
//     }
// }




let add = document.getElementById('Add'),
    rmvIcon = document.getElementById('rmvIcon'),
    rmvTxt = document.getElementById('rmv');

function added() {
    rmvIcon.style.display = 'inline';
    rmvTxt.innerHTML = 'Remove';
    add.style.backgroundColor = 'gray';
    add.style.color = 'white';
    add.style.border = 'none';
}

function removed() {
    rmvTxt.innerHTML = 'Add to Cart';
    rmvIcon.style.display = 'none';
    add.style.backgroundColor = '#ffffff';
    add.style.color = '#AD4C4C';
    add.style.border = 'solid';
    add.style.borderColor = '#AD4C4C';
    add.style.borderWidth = '1px';
    add.style.borderRadius = '3px';
}

function change() {
    if (rmvIcon.style.display === 'none') {
        added();
        cartFilled();
    } else {
        removed();
        cartFilled();
    }
}


let add2 = document.getElementById('Add2'),
    rmvIcon2 = document.getElementById('rmvIcon2'),
    rmvTxt2 = document.getElementById('rmv2');

function added2() {
    rmvIcon2.style.display = 'inline';
    rmvTxt2.innerHTML = 'Remove';
    add2.style.backgroundColor = 'gray';
    add2.style.color = 'white';
    add2.style.border = 'none';
}

function removed2() {
    rmvTxt2.innerHTML = 'Add to Cart';
    rmvIcon2.style.display = 'none';
    add2.style.backgroundColor = '#ffffff';
    add2.style.color = '#AD4C4C';
    add2.style.border = 'solid';
    add2.style.borderColor = '#AD4C4C';
    add2.style.borderWidth = '1px';
    add2.style.borderRadius = '3px';
}

function change2() {
    if (rmvIcon2.style.display === 'none') {
        added2();
        cartFilled();
    } else {
        removed2();
        cartFilled();
    }
}


let add3 = document.getElementById('Add3'),
    rmvIcon3 = document.getElementById('rmvIcon3'),
    rmvTxt3 = document.getElementById('rmv3');

function added3() {
    rmvIcon3.style.display = 'inline';
    rmvTxt3.innerHTML = 'Remove';
    add3.style.backgroundColor = 'gray';
    add3.style.color = 'white';
    add3.style.border = 'none';
}

function removed3() {
    rmvTxt3.innerHTML = 'Add to Cart';
    rmvIcon3.style.display = 'none';
    add3.style.backgroundColor = '#ffffff';
    add3.style.color = '#AD4C4C';
    add3.style.border = 'solid';
    add3.style.borderColor = '#AD4C4C';
    add3.style.borderWidth = '1px';
    add3.style.borderRadius = '3px';
}

function change3() {
    if (rmvIcon3.style.display === 'none') {
        added3();
        cartFilled();
    } else {
        removed3();
        cartFilled();
    }
}


let add4 = document.getElementById('Add4'),
    rmvIcon4 = document.getElementById('rmvIcon4'),
    rmvTxt4 = document.getElementById('rmv4');

function added4() {
    rmvIcon4.style.display = 'inline';
    rmvTxt4.innerHTML = 'Remove';
    add4.style.backgroundColor = 'gray';
    add4.style.color = 'white';
    add4.style.border = 'none';
}

function removed4() {
    rmvTxt4.innerHTML = 'Add to Cart';
    rmvIcon4.style.display = 'none';
    add4.style.backgroundColor = '#ffffff';
    add4.style.color = '#AD4C4C';
    add4.style.border = 'solid';
    add4.style.borderColor = '#AD4C4C';
    add4.style.borderWidth = '1px';
    add4.style.borderRadius = '3px';
}

function change4() {
    if (rmvIcon4.style.display === 'none') {
        added4();
        cartFilled();
    } else {
        removed4();
        cartFilled();
    }
}


let filledCartImg = document.getElementById('filledCartImg');
function cartFilled() {
    if (rmvIcon4.style.display === 'inline' || rmvIcon3.style.display === 'inline' || rmvIcon2.style.display === 'inline' || rmvIcon.style.display === 'inline'||
    rmvIcon4CR.style.display === 'inline' || rmvIcon3CR.style.display === 'inline' || rmvIcon2CR.style.display === 'inline' || rmvIconCR.style.display === 'inline') {
        filledCartImg.style.display = 'inline';
    } else {
        filledCartImg.style.display = 'none';
    }
}

