//Registrode Service Worker
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./js/sw.js")
    .then((registration) => {
        console.log("service worker registrado");
    })
    .catch((error) => {
        console.log("service worker no registrado");
    });
}

