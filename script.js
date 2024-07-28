let form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let errorBlock = document.querySelectorAll('.error-text')
    console.log(errorBlock.length);
    if (errorBlock.length > 0) {

        for (let i = 0; i < errorBlock.length; i++) {
            errorBlock[i].remove();
        }
    }

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let modal = document.querySelector('.popup-container');
    let closeButton = document.querySelector('.close');
    let checked = true;

    if (name.value == '' || email.value == '' || message.value == '') {
        checked = false;
    }

    if (name.value == '') {
        name.insertAdjacentHTML('beforebegin', '<span class="error-text">Не введено имя</span>');
    }

    if (email.value == '') {
        email.insertAdjacentHTML('beforebegin', '<span class="error-text">Не введена почта</span>');
    }

    if (message.value == '') {
        message.insertAdjacentHTML('beforebegin', '<span class="error-text">Не введена сообщение</span>');
    }

    if (checked) {
        modal.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modal || event.target == closeButton) {
            modal.style.display = "none";
        }
    }
});