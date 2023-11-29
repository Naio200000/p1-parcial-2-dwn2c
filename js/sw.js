self.addEventListener("fetch", (e) => {
    const url = e.request.url;
    console.log(url);
});