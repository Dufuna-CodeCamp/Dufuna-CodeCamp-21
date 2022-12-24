const address = document.getElementById('address'),
      interest = document.querySelectorAll('.interest-item');

address.addEventListener('change', function(e){
    if (!(address.value == '')) {
        interest.forEach(element => {
            element.classList.add('active');
            element.setAttribute('href', 'vendors.html');
        });
    } else {
        interest.forEach(element => {
            element.classList.remove('active');
            element.removeAttribute('href');
        })
    }
});
