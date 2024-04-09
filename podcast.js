var emailInput = document.getElementById('email-input');
var emailLabel = document.getElementById('email-label');
var emailError = document.getElementById('email-error');
var thankYouPage = document.getElementById('thankYouPage')
var firstPage = document.getElementById('firstPage');
var leftPage = document.getElementById('leftPage');
var imagePage = document.getElementById('image');
var userEmail = document.getElementById("user-email");


function validateEmail(){

    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Valid email required";
        content.style.color = 'red';
        return false;
    }
    emailError.innerHTML = "";
    firstPage.style.display = 'none';
    leftPage.style.display = 'none';
    imagePage.style.display = 'none';
    thankYouPage.style.display = 'block';
    document.getElementById("user-email").innerHTML = `${emailInput.value}. `;
    return true;
}

function dismissMessage(){

    thankYouPage.style.display = 'none';
    firstPage.style.display = 'block';
    leftPage.style.display = 'block';
    imagePage.style.display = 'block';
    location.reload(true);
}