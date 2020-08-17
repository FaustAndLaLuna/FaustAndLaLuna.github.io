var rend = (navigator.userAgent.indexOf("Safari") >  -1 ? "canvas" : "svg");
rend = (navigator.userAgent.indexOf("Chrome") >  -1 ? "svg" : rend);

var bgAnimation = bodymovin.loadAnimation({
    container: document.getElementById("bgAnim"),
    renderer: rend,
    loop: true,
    autoplay: true,
    path: "assets/json/neon.json",
    rendererSettings:{
        preserveAspectRatio: 'none',
    }
});
var logoAnimation = bodymovin.loadAnimation({
    container: document.getElementById("logoAnim"),
    renderer: rend,
    loop: true,
    autoplay: true,
    path: "assets/json/logo.json"
});
var mediaAnimation = bodymovin.loadAnimation({
    container: document.getElementById("mediaAnim"),
    renderer: rend,
    loop: true,
    autoplay: true,
    path: "assets/json/media.json"
});