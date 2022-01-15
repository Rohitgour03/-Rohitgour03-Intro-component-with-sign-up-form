// Just selecting all the fields and inputs
const form = document.querySelector('#form');
const inputContainer = form.querySelectorAll('.input-ctn');
const inputs = form.querySelectorAll('.input');
const submit = form.querySelector('.second-cta');

const firstName = form.querySelector('#fName');
const lastName = form.querySelector('#LName');
const email = form.querySelector('#email');
const password = form.querySelector('#password');



// If input is empty, this function adds the error.
function setError(element, message) {
    element.parentElement.classList.add('error');
    element.parentElement.lastElementChild.textContent = `${message}`;
}


// If input is of correct format, this function removes the error.
function setSuccess(element) {
    element.parentElement.classList.remove('error');
}



// Function for validating the inputs
function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let allValid = true;

    if (firstNameValue.length === 0) {
        setError(firstName, "First Name cannot be empty");
        allValid = false;

    } else {
        setSuccess(firstName)
    }

    if (lastNameValue.length === 0) {
        setError(lastName, "Last Name cannot be empty");
        allValid = false;

    } else {
        setSuccess(lastName);
    }

    if (emailValue.length === 0) {
        setError(email, "Email cannot be empty");
        allValid = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, "Looks like this is not an email");
        allValid = false;
    } else {
        setSuccess(email)
    }

    if (passwordValue.length === 0) {
        setError(password, "Password cannot be empty");
        allValid = false;
    } else {
        setSuccess(password)
    }

    if (allValid) {
        form.submit();
    }

}



// Function for validating the email, using the regular expression
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};



// Adding Submit event listener to the form.
form.addEventListener('submit', e => {
    e.preventDefault(); // preventing the form from submitting
    validateInputs();
});


























// function checkError() {
//     inputs.forEach((input) => {
//         console.log(input.name)

//         if (input.name === 'firstName' && input.value === "") {
//             input.parentElement.classList.add('error');
//             input.parentElement.lastElementChild.textContent = "First Name cannot be empty";
//         }

//         if (input.name === 'lastName' && input.value === "") {
//             input.parentElement.classList.add('error');
//             input.parentElement.lastElementChild.textContent = "Last Name cannot be empty";
//         }

//         if (input.name === 'email') {
//             if (input.value === "") {
//                 input.parentElement.classList.add('error');
//                 input.parentElement.lastElementChild.textContent = "Email cannot be empty";
//             }
//             if (!validateEmail(input.value)) {
//                 input.parentElement.classList.add('error');
//                 input.parentElement.lastElementChild.textContent = "Looks like this is not an Email"
//             }
//         }

//         if (input.name === 'password' && input.value === "") {
//             input.parentElement.classList.add('error');
//             input.parentElement.lastElementChild.textContent = "Password cannot be empty";
//         }
//     })
// }


// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     checkError();
// });