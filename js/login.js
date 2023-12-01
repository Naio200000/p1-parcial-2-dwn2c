const loginForm = document.getElementById('loginForm')
const validateError = document.getElementById('validateError')
const loginbtn = document.getElementById('loginbtn')

if (loginForm != null) {
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
            localStorage.setItem("login", JSON.stringify(json));
            window.location.replace("../index.html");
        } else {
            validateError.innerHTML = json.mensaje
        }
    }
}

const checklogin = function () {
    loginbtn.innerHTML = 'Iniciar Sesion'

    if (localStorage.getItem('login')){
        loginbtn.innerHTML = 'Cerrar Sesion'
        loginbtn.href = ''
        loginbtn.addEventListener('click', (e)=> {
            logout()
        })
    }
    
}
const logout = function () {
    localStorage.removeItem('login')
}


checklogin()