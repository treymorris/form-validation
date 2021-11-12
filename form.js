const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const passconf = document.getElementById('passconf');
const form = document.getElementById('form');

email.addEventListener('input', function (event){
    if (email.validity.valid) {
        email.setCustomValidity('');
    } else {
        showError();
    }
});

form.addEventListener('submit', function (event){
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        email.setCustomValidity('You need to enter an e-mail address.');
    }   else if (email.validity.typeMismatch) {
        email.setCustomValidity('Entered value needs to be an e-mail address.');
    }   else if (email.validity.tooShort) {
        email.setCustomValidity(`E-mail should be at least 8 characters, you entered ${email.value.length}`);
    }

}

country.addEventListener('input', function (event){
    if (country.validity.valid) {
        country.setCustomValidity('');
    } else {
        showError2();
    }
});

function showError2() {
    if (country.validity.valueMissing) {
        country.setCustomValidity('You need to enter a Country.');
    }   else if (country.validity.tooLong) {
        country.setCustomValidity('Whoa there! Too many characters!');
    }   else if (country.validity.tooShort) {
        country.setCustomValidity(`Country should be at least 4 characters, you entered ${country.value.length}`);
    }

}