

// GET THE VALUE OF THE LOCATION DROPDOWN

let locationVal = document.getElementById('locate');
// console.log(locationVal);

// MAKE THE INTEREST ITEMS HIGHLIGHTED AND CLICKABLE

const validateLocation = (e) => {
    let highlighted = document.getElementById('highlighted-grid');
    let greyedOut = document.getElementById('interest-grid');
    highlighted.style.display = "grid";
    greyedOut.style.display = "none";
    locationVal.style.color = "#4E4D4D";
    
}
// ADD A CHANGE EVENT

locationVal.addEventListener("change", validateLocation);


// INTERESTS

// let interest = document.getElementsByClassName('highlighted');

// const clickInterest = (e) => {
//     console.log("clicked an interest!");
// }

// for (let i = 0; i < interest.length; i++) {
//     interest[i].addEventListener('click', clickInterest);
// }

// ADD A CLICK EVENT

// interest.addEventListener('click', clickInterest);


