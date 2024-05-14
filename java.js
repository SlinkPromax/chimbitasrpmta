// Verificar si hay datos de usuarios en el almacenamiento local
var users = JSON.parse(localStorage.getItem('users')) || [];

function redirectToIndex2() {
    window.location.href = 'index2.html'; // Redirige al usuario a index2.html
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}   

function register() {
    var registerUsername = document.getElementById('registerUsername').value;
    var registerEmail = document.getElementById('registerEmail').value;
    var registerPassword = document.getElementById('registerPassword').value;

    // Verificar si ya hay una cuenta registrada con la misma IP
    var currentIP = ''; // Aquí debes obtener la dirección IP del usuario, esto puede variar dependiendo de cómo estés manejando las IPs
    var existingUser = users.find(user => user.ip === currentIP);
    if (existingUser) {
        alert('Ya hay una cuenta registrada desde esta dirección IP.');
        return;
    }

    // Si no hay una cuenta registrada con la misma IP, procede con el registro
    var newUser = {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
        ip: currentIP
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir al usuario a index2.html después del registro exitoso
    redirectToIndex2();
}

function login() {
    // Aquí iría tu lógica para verificar el inicio de sesión y guardar la cuenta por IP
    // Luego redirige al usuario a index2.html si el inicio de sesión es exitoso
}
