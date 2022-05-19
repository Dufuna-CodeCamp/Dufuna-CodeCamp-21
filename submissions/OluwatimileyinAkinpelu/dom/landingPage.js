let selectedAddress = document.querySelector('#delivery-address');
let interestList = document.querySelectorAll('.interest-lists-item');

validate = () => {
        interestList.forEach((item) => {
            if (selectedAddress.value) {
            let interestImage = item.children[0].attributes.src
            interestImage.textContent = interestImage.textContent.replace('-disabled.svg', '.svg');
            item.children[1].children[0].style.color = '#AD4C4C';
            item.style.cursor  = 'pointer';
            item.children[1].children[1].style.color = '#696969';
            item.onclick = () => location.href = "../../css/html/vendors.html"
        }
        else {
            let interestImage = item.children[0].attributes.src
            item.children[1].children[1].style.color = '#A5A5A5';
            item.children[1].children[0].style.color = '#A5A5A5';
            item.style.cursor  = 'auto';
            interestImage.textContent = interestImage.textContent.replace('.svg', '-disabled.svg');
        }
    })
    }

selectedAddress.addEventListener("change", validate)
