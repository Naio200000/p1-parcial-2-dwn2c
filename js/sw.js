caches.keys().then(cache => {
    console.log("cache", cache)
})


self.addEventListener("install", (e) => {
    console.log("install");
    caches.open("basicApp").then((cache) => {
        cache.addAll([
            '../',
            '../views/',
            '../img/hero/',
            '../img/dojos/',
            '../img/historia/',
            '../img/icons/',
            '../img/logo/',
            '../img/logo/SVG/',
            '../img/misc/',
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