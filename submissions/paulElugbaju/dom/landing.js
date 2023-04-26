let address = document.getElementById('location');
let interest = document.querySelectorAll('.your-interest');
let services = document.querySelectorAll('.services');
let image = document.querySelectorAll('.interest-image')

interest.forEach((int) => {
    int.addEventListener('click', interestClick);
    // int.addEventListener('mouseover', hoverColor);
})

function interestClick (e) {
    if (address.value == '') {
        alert('Please pick a location');
        e.preventDefault();
        return false;
    } else {
        return true;
    }
}

// function hoverColor (e) {
//     if (address.value == '') {
//         interest.style.backgroundColor = 'rgba(0,0,0,0.6)'
//     }
// }

address.addEventListener('change', interestStyle);

function interestStyle (e) {
    if (e.target.value != '') {
       image[0].src = './images/fast-food.svg';
       image[1].src = './images/Vegetables _ Drinks.svg';
       image[2].src = './images/Drinks _ Cocktails.svg';
       image[3].src = './images/resturant.svg';

       services.forEach((color) => {
        color.style.color = '#ad4c4c';
    })
    interest.forEach((load) => {
        load.addEventListener('click', vendorPage)
        function vendorPage () {
            window.location.href = './vendor.html'
        }
    });
    return true;
    } else {
        return false;
    }
}
