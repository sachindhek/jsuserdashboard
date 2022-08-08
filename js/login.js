function login() {

    let usersJson = localStorage.getItem('users');
    let users = JSON.parse(usersJson);

    for (let i = 0; i < users.length; i++) {
        let Email = users[i].email;
        let Passq = users[i].password;

        let userName = document.getElementById('emailid');
        let userPw = document.getElementById('pass');

        if (userName.value == Email && userPw.value == Passq) {
            location.href = 'userdetails.html';
            localStorage.setItem('loggedIn', true);
            return;
        }

        const emailError = document.getElementById("email-validation");
        const passError = document.getElementById("email-validation");
        emailError.hidden = false;
        passError.hidden = false;
    }
}

