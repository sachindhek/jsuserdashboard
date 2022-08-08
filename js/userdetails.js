function fillUserDetails() {
    console.log('filUserDetails called');

    let loggedIn = localStorage.getItem('loggedIn');

    console.log('loggedIn', loggedIn);

    if (loggedIn == null || loggedIn == 'false') {
        location.href = 'login.html';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));

    const tableBody = document.getElementById('user-details');
    for (let i = 0; i < users.length; i++) {
        tableBody.innerHTML += "<tr>" +
            "<td> " + (1 + i) + " </td>" +
            "<td>" + users[i].firstName + "</td>" +

            "<td>" + users[i].phoneNumber + "</td>" +
            "<td>" + users[i].email + "</td>" +
            "<td>" + '<img onclick="edit(' + users[i].id + ')" src="images/edit.svg" height="25px">' +
            '<img onclick="myDelete(this, ' + users[i].id + ')" src="images/delete.svg" height="25px"> </td></tr>';
    }
}

function edit(id) {
    $("#staticBackdrop").modal('toggle');
    document.getElementById('userid').value = id;
}

function editDetail() {
    let userId = document.getElementById('userid').value;

    let usersJSON = localStorage.getItem('users');
    let users = JSON.parse(usersJSON);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            const firstName = document.getElementById("first").value;
            const phoneNumber = document.getElementById("number").value;
            const email = document.getElementById("email").value;

            users[i].firstName = firstName;
            users[i].phoneNumber = phoneNumber;
            users[i].email = email;
        }
    }

    localStorage.setItem('users', JSON.stringify(users));

    location.href = 'userdetails.html';
}

function myDelete(r, id) {

    if (!confirm("Are you sure?")) return;

    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab").deleteRow(i);

    let usersJSON = localStorage.getItem('users');
    let users = JSON.parse(usersJSON);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i, 1);
        }
    }

    localStorage.setItem('users', JSON.stringify(users));
    location.href = 'userdetails.html';
}

function logout() {
    localStorage.setItem('loggedIn', false);
    location.href = 'login.html';

}