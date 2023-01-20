window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let html = document.querySelector("#HTML");
    html.addEventListener("click", selectHTML);
    let css = document.querySelector("#CSS");
    css.addEventListener("click", selectCSS);
    let typescript = document.querySelector("#Typescript");
    typescript.addEventListener("click", selectTypescript);
    let gemischt = document.querySelector("#Gemischt");
    gemischt.addEventListener("click", selectGemischt);
}
function selectHTML(_event) {
    console.log("selectHTML");
}
function selectCSS(_event) {
    console.log("selectCSS");
}
function selectTypescript(_event) {
    console.log("selectTypescript");
}
function selectGemischt(_event) {
    console.log("selectGemischt");
}
//# sourceMappingURL=script.js.map