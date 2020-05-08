// About Me Page Flip:
let crossButtons = document.querySelectorAll('.btn-turn');

crossButtons.forEach(button => button.addEventListener('click', toggle));

function toggle(){
    this.parentElement.classList.toggle('turnCard');
    this.children[0].classList.toggle('turnBtn');  
};


//Form Validation
let form = document.querySelector('.form'),
    formControl = form.querySelectorAll('div:not(.message):not(.email)'),
    email = form.querySelector('.email'),
    textarea = form.querySelector('.message');

form.addEventListener('submit', checkInputs);

function checkInputs(e) {
    e.preventDefault();

    formControl.forEach(inputField => { 
        if ((inputField.children[0]).value.trim() === '') {
            inputField.classList.add('invalid')  
        } else {
            inputField.classList.remove('invalid')
        }
    }); 

    if (email.children[0].value.trim() === '') {
        email.classList.add('invalid')
    } else if (!validateEmail(email.children[0].value.trim())) {
        email.classList.add('invalid')
        email.children[1].innerText = `Please enter a valid email`
     } else {
         email.classList.remove('invalid')
     }

    if (textarea.children[2].value.trim() === '') {
        textarea.classList.add('invalid');
    } else {
        textarea.classList.remove('invalid')
    }
}

function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
} 

/* Explanation for form validation:

    All divs (name, email, company, title, message) are all parent elements with a class name of 'form__control'.
    The first 4 (just not textarea) have 2 children elements: an input(.children[0]) & a small tag/error msg(.children[1]).

    Made a seperate variable for the email so that I could put a unique error message in case of invalid email
    address entry.

    Had to make seperate varaible for textarea because it does not have an input tag.
    Textarea has 4 children: <label>, <br>, <textarea>(.children[2]), & <small>.
    
*/

textarea.addEventListener('input', function() { // Keep bgc when there's any text in textarea
    if (this.children[2].value !== '') {
        this.children[2].style.backgroundColor = 'hsl(186, 100%, 14%)' // $deep-jungle-green
    } else {
        this.children[2].style.backgroundColor = 'inherit'
    }
})