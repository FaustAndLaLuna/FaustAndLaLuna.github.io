var bgAnimation = bodymovin.loadAnimation({
    container: document.getElementById("bgAnim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/json/neon.json"
});
var logoAnimation = bodymovin.loadAnimation({
    container: document.getElementById("logoAnim"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/json/logo.json"
});