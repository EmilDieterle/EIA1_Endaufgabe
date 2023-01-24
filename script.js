window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let html = document.querySelector("#HTML");
    //html.addEventListener("click", selectHTML);
    let css = document.querySelector("#CSS");
    //css.addEventListener("click", selectCSS);
    let typescript = document.querySelector("#Typescript");
    //typescript.addEventListener("click", selectTypescript);
    let gemischt = document.querySelector("#Gemischt");
    let html1 = {
        question: "Question",
        answers: ["a", "b", "c"],
        //correctAnswer: "correctAnswer",
        comment: "Comment"
    };
    let html2 = {
        question: "2Question",
        answers: ["2a", "2b", "2c"],
        //correctAnswer: "2correctAnswer",
        comment: "2Comment"
    };
    let start = document.querySelector("#start");
    let container = document.querySelector("#container");
    let superContainer = document.querySelector("#superContainer");
    start.addEventListener("click", function () {
        let htmlButton = document.createElement("button");
        htmlButton.innerHTML = "HTML";
        let cssButton = document.createElement("button");
        cssButton.innerHTML = "CSS";
        let typescriptButton = document.createElement("button");
        typescriptButton.innerHTML = "Typescript";
        let gemischtButton = document.createElement("button");
        gemischtButton.innerHTML = "Gemischt";
        let container = document.createElement("div");
        container.appendChild(htmlButton);
        container.appendChild(cssButton);
        container.appendChild(typescriptButton);
        container.appendChild(gemischtButton);
        superContainer.appendChild(container);
        superContainer.removeChild(start);
        htmlButton.addEventListener("click", selectHTML);
        function selectHTML(_event) {
            console.log("selectHTML");
            container.removeChild(htmlButton);
            container.removeChild(cssButton);
            container.removeChild(typescriptButton);
            container.removeChild(gemischtButton);
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
    });
}
//# sourceMappingURL=script.js.map