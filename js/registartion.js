const form = document.getElementById('form');
const nameFirst = document.getElementById('first');
const mail = document.getElementById('email');
const numberPhone = document.getElementById('number');
const passw = document.getElementById('password');
const passc = document.getElementById('cpassword');

console.log('form', form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValidationPassed = Validate();

    if (isValidationPassed) {
        register();
    }
})

let isEmail = (mailVal) => {
    let atSymbol = mailVal.indexOf('@');
    if (atSymbol < 1) {
        return false;
    }
    let dot = mailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) {
        return false;
    }
    if (dot === mailVal.length - 1) {
        return false;
    }
    return true;
}

let Validate = () => {
    const nameFirstVal = nameFirst.value.trim();
    const mailVal = mail.value.trim();
    const numberPhoneVal = number.value.trim();
    const passwVal = passw.value.trim();
    const passcVal = passc.value.trim();

    let validation = true;

    if (nameFirstVal === "") {
        setErrorMsg(nameFirst, "Name cannot be blank");
        validation = false;
    } else if (nameFirstVal.length <= 2) {
        setErrorMsg(nameFirst, 'Name must have atleast 3 character');
        validation = false;
    } else {
        setSuccessMsg(nameFirst);
    }


    if (mailVal === "") {
        setErrorMsg(mail, "Email cannot be blank");
        validation = false;
    } else if (!isEmail(mailVal)) {
        setErrorMsg(mail, 'Please add atleast one @ or .');
        validation = false;
    } else {
        setSuccessMsg(mail);
    }

    if (numberPhoneVal === "") {
        setErrorMsg(numberPhone, "Phone Number cannot be blank");
        validation = false;
    } else if (numberPhoneVal.length != 10) {
        setErrorMsg(numberPhone, 'Please add 10 digit number');
        validation = false;
    } else {
        setSuccessMsg(numberPhone);
    }

    if (passwVal === "") {
        setErrorMsg(passw, "password cannot be blank");
        validation = false;
    } else if (passwVal.length <= 8) {
        setErrorMsg(passw, 'Please add atleast 8 character');
        validation = false;
    } else {
        setSuccessMsg(passw);
    }

    if (passcVal === "") {
        setErrorMsg(passc, "Confirm password cannot be blank");
        validation = false;
    } else if (passwVal != passcVal) {
        setErrorMsg(passc, 'Password are not matching');
        validation = false;
    } else {
        setSuccessMsg(passc);
    }

    return validation;
}

function setErrorMsg(input, errormsgs) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = "form-control success";
    small.innerText = "";
}


function register() {
    const firstName = document.getElementById("first").value;
    const phoneNumber = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const usersJSON = localStorage.getItem('users');
    let users = [];
    if (usersJSON) {
        users = JSON.parse(usersJSON);
    }
    const user = {
        'id': users.length,
        'firstName': firstName,
        'phoneNumber': phoneNumber,
        'email': email,
        'password': password
    };
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    location.href = "login.html";
}
