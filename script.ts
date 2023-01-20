window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    let html: HTMLButtonElement = document.querySelector("#HTML");
    html.addEventListener("click", selectHTML);

    let css: HTMLButtonElement = document.querySelector("#CSS");
    css.addEventListener("click", selectCSS);

    let typescript: HTMLButtonElement = document.querySelector("#Typescript");
    typescript.addEventListener("click", selectTypescript);

    let gemischt: HTMLButtonElement = document.querySelector("#Gemischt");
    gemischt.addEventListener("click", selectGemischt);
}

function selectHTML(_event: MouseEvent): void {
    console.log("selectHTML");
}

function selectCSS(_event: MouseEvent): void {
    console.log("selectCSS");
}

function selectTypescript(_event: MouseEvent): void {
    console.log("selectTypescript");
}

function selectGemischt(_event: MouseEvent): void {
    console.log("selectGemischt");
}