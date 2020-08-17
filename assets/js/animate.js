var bgAnimation = bodymovin.loadAnimation({
    container: document.getElementById("bgAnim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/json/neon.json",
    rendererSettings:{
        preserveAspectRatio: 'none',
    }
});
var logoAnimation = bodymovin.loadAnimation({
    container: document.getElementById("logoAnim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/json/logo.json"
});
var mediaAnimation = bodymovin.loadAnimation({
    container: document.getElementById("mediaAnim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/json/media.json"
});