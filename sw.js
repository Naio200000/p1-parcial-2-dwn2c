self.addEventListener("install", (e) => {
    const cache = caches.open("basicApp").then((c) => {
        c.addAll([
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
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
            'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600&family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap'
        ]);
    });
    e.waitUntil(cache);
});


self.addEventListener("fetch", (e) => {
    let url = e.request.url
    if (url.includes("login")) {
        return fetch(e.request);
    }
    let cacheStorage = 'basicApp';
    if (url.includes("producto")) {
        cacheStorage = 'producto'
    }
    const response = fetch(e.request)
                    .then((res) => {
                        return caches.open(cacheStorage).then(cache => {
                            cache.put(e.request, res.clone());
                            return res;
                        })
                    })
                    .catch((err) => {
                        return caches.match(e.request);
                    })
    e.respondWith(response);

});