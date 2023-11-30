caches.keys().then(cache => {
    console.log("cache", cache)
})


self.addEventListener("install", (e) => {
    console.log("install");
    caches.open("basicApp").then((cache) => {
        cache.addAll([
            '../',
            '../views/',
            '../img/hero/komei-juku-hero-2.webp',
            '../img/hero/komei-juku-hero-3.webp',
            '../img/hero/komei-juku-hero-4.webp',
            '../img/dojos/dario-perfil.jpg',
            '../img/dojos/horacio-perfil.jpg',
            '../img/dojos/javier-perfil.jpg',
            '../img/dojos/jorge-perfil.jpg',
            '../img/historia/historia-1.jpg',
            '../img/historia/historia-2.jpg',
            '../img/historia/historia-3.jpg',
            '../img/historia/historia-4.jpg',
            '../img/icons/',
            '../img/logo/komei_Juku.png',
            '../img/logo/SVG/github_icon.svg',
            '../img/logo/SVG/Instagram_logo_2016.svg',
            '../img/logo/SVG/LinkedIn_icon.svg',
            '../img/misc/imagen-contactos.jpg',
            '../img/misc/perfil.jpg',
            '../img/misc/tarjetas.jfif',
            '../estilos/',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js'
        ]);
    });
});


self.addEventListener("fetch", (e) => {
    const url = e.request.url;
    console.log(url);
});