var emailInput = document.getElementById('email-input');
var emailError = document.getElementById('email-error');


function validateEmail(){

    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Oops! Please check your email";
        content.style.color = 'red';
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

