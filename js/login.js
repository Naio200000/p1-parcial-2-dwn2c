const loginForm = document.getElementById('loginForm')


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(loginForm)

    fetch('../acciones/auth_login-accion.php', {
        method: 'POST',
        body: data })
    .then(response => response.json())
    .then(data => console.log(data))




})

