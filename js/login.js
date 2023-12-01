const loginForm = document.getElementById('loginForm')
const validateError = document.getElementById('validateError')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let data = new FormData(loginForm)

    await fetch('../acciones/auth_login-accion.php', {
        method: 'POST',
        body: data })
    .then(response => response.json())
    .then(loginData => validateLogin(loginData))

})

const validateLogin = function(json) {

    if (json.login){
        console.log(json.username)
    } else {
        validateError.innerHTML = json.mensaje
    }
}