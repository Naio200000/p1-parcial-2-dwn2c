const loginForm = document.getElementById('loginForm')
const validateError = document.getElementById('validateError')
const loginbtn = document.getElementById('loginbtn')
const login = localStorage.getItem('login') ? JSON.parse(localStorage.getItem("login")) : false

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
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {keyboard: false})
    const url = document.referrer
    if (localStorage.getItem('login')){
        if (url.includes('login')) {
            loginModal.toggle()
            document.querySelector('#loginModal #userModal').innerHTML = `Hola ${login.username}`
            document.querySelector('#loginModal #cerrarSesionbtn').addEventListener('click', () => {
                loginModal.toggle()
            })
        }
        loginbtn.innerHTML = 'Cerrar Sesion'
        loginbtn.href = ''
        loginbtn.setAttribute('data-bs-toggle', 'modal')
        loginbtn.setAttribute('data-bs-target', '#loginModal')
        document.getElementById('loginModal').addEventListener('hide.bs.modal', () => {
            cambiaLoginModal(loginModal)
        })
    }
    
}


const cambiaLoginModal = function (loginModal) {
    document.querySelector('#loginModal #loginModalLabel').innerHTML = 'Cerrar Sesion'
    document.querySelector('#loginModal #userModal').innerHTML = 'Esta seguro que quiere Cerrar Sesion?'
    document.querySelector('#loginModal #cerrarSesionbtn').innerHTML = 'Cerrar Sesión'
    document.querySelector('#loginModal #cerrarSesionbtn').addEventListener('click', () => {
        logout()
        loginModal.toggle()
    })
}
const logout = function () {
    localStorage.removeItem('login')
    loginbtn.innerHTML = 'Iniciar Sesion'
    loginbtn.href = '../views/login.html'
    if (document.URL.includes('index')) loginbtn.href = './views/login.html'
    loginbtn.removeAttribute('data-bs-toggle')
    loginbtn.removeAttribute('data-bs-target')
}


checklogin()


