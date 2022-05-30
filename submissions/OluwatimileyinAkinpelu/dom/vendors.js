let addButtons = document.querySelectorAll(".add-btn");
let notificationDot = document.querySelector('li>a>span')
showNotificationDot = () => {
    const removeBtn = document.querySelectorAll('.remove-btn')
    if (removeBtn.length) {
        notificationDot.classList.add('notify-visible');
    }
}
addButtons.forEach((addButton) => {
    addButton.addEventListener("click", () => {
        console.dir(addButton);
         if (addButton.innerText === "Add to Cart") {
            addButton.innerHTML = '<img src="../images/remove.svg"/> <span>Remove</span>'
            addButton.classList.add('remove-btn');
        } else {
            addButton.classList.remove('remove-btn');
            addButton.innerHTML = 'Add to Cart'
            notificationDot.classList.remove('notify-visible');
        }
        showNotificationDot();
    })
})