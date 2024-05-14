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

function login() {
    // Aquí iría tu lógica para verificar el inicio de sesión
    // Si el inicio de sesión es exitoso, redirige al usuario a index2.html
    redirectToIndex2();
}

function register() {
    // Aquí iría tu lógica para registrar al usuario
    // Si el registro es exitoso, redirige al usuario a index2.html
    redirectToIndex2();
}
