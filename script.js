let emailInput = document.getElementById('email');
let submit = document.getElementById('submit');
let errorMsg = document.getElementById('form-error')
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/




submit.addEventListener('click', function (){
    if (emailInput.value === '') {
        errorMsg.style.visibility = 'visible';

    } else if (regex.test(emailInput.value)){

        if (errorMsg.style.visibility = 'visible') {
            errorMsg.style.visibility = 'hidden'
            // send to server
        } else {
        // send to server
    }
    } else {
        errorMsg.style.visibility = 'visible';
    }
})