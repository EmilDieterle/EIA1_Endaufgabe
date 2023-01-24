window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    let html: HTMLButtonElement = document.querySelector("#HTML");
    //html.addEventListener("click", selectHTML);

    let css: HTMLButtonElement = document.querySelector("#CSS");
    //css.addEventListener("click", selectCSS);

    let typescript: HTMLButtonElement = document.querySelector("#Typescript");
    //typescript.addEventListener("click", selectTypescript);

    let gemischt: HTMLButtonElement = document.querySelector("#Gemischt");
    //gemischt.addEventListener("click", selectGemischt);

    interface QAC {
    question: string;
    answers: string[];
    //correctAnswer: string;
    comment: string;
    }

    let html1: QAC = {
        question: "Question",
        answers: ["a", "b", "c"],
        //correctAnswer: "correctAnswer",
        comment: "Comment"
    };

    let html2: QAC = {
        question: "2Question",
        answers: ["2a", "2b", "2c"],
        //correctAnswer: "2correctAnswer",
        comment: "2Comment"
    };

    let start: HTMLButtonElement = document.querySelector("#start");

    let container: HTMLDivElement = document.querySelector("#container");

    let superContainer: HTMLDivElement = document.querySelector("#superContainer");

    start.addEventListener("click", function(): void {

    let htmlButton: HTMLButtonElement = document.createElement("button");
    htmlButton.innerHTML = "HTML";
    let cssButton: HTMLButtonElement = document.createElement("button");
    cssButton.innerHTML = "CSS";
    let typescriptButton: HTMLButtonElement = document.createElement("button");
    typescriptButton.innerHTML = "Typescript";
    let gemischtButton: HTMLButtonElement = document.createElement("button");
    gemischtButton.innerHTML = "Gemischt";
    let container: HTMLDivElement = document.createElement("div");

    container.appendChild(htmlButton);
    container.appendChild(cssButton);
    container.appendChild(typescriptButton);
    container.appendChild(gemischtButton);
    superContainer.appendChild(container);

    superContainer.removeChild(start);

    htmlButton.addEventListener("click", selectHTML);
    
    function selectHTML(_event: MouseEvent): void {
    console.log("selectHTML");
    container.removeChild(htmlButton);
    container.removeChild(cssButton);
    container.removeChild(typescriptButton);
    container.removeChild(gemischtButton);

    
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

});

}