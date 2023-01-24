
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
