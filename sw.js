self.addEventListener("install", (e) => {
    caches.open("basicApp").then((cache) => {
        cache.addAll([
            './index.html',
            './manifest.json',
            './views/dojos.html',
            './views/tienda.html',
            './views/nosotros.html',
            './img/hero/komei-juku-hero-2.webp',
            './img/hero/komei-juku-hero-3.webp',
            './img/hero/komei-juku-hero-4.webp',
            './img/dojos/dario-perfil.jpg',
            './img/dojos/horacio-perfil.jpg',
            './img/dojos/javier-perfil.jpg',
            './img/dojos/jorge-perfil.jpg',
            './img/historia/historia-1.jpg',
            './img/historia/historia-2.jpg',
            './img/historia/historia-3.jpg',
            './img/historia/historia-4.jpg',
            './img/icons/',
            './img/logo/komei_Juku.png',
            './img/logo/SVG/github_icon.svg',
            './img/logo/SVG/Instagram_logo_2016.svg',
            './img/logo/SVG/LinkedIn_icon.svg',
            './img/misc/imagen-contactos.jpg',
            './img/misc/perfil.jpg',
            './img/misc/tarjetas.jfif',
            './estilos/style.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js'
        ]);
    });
});


self.addEventListener("fetch", (e) => {
    let url = e.request.url
    if(url.includes("img")) { // intercepto imagen
        e.respondWith( // reemplazo la respuesta
            fetch(url) //consulto por la info de la imagen
            .then(respuesta => {
                console.log("interceptando imagen", respuesta.status)
                if(respuesta.status === 404) {
                    return fetch('https://placehold.co/600x400');
                } else {
                    return respuesta;
                }
            })
        );
    }
});


caches.keys().then(cache => {
    console.log("cache", cache)
})