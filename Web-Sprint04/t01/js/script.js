let characters = document.getElementById("characters").children;

for (let i = 0; i < characters.length; i++) {
    let recdClass = characters[i].getAttribute("class");
    let recdElem = characters[i].getAttribute("data-element");

    if (recdClass !== "good" && recdClass !== "evil"
        || !recdClass) {
        characters[i].className = "unknown";
    }
    if (!recdElem) {
        characters[i].setAttribute("data-element", "none");
    }

    characters[i].appendChild(document.createElement("br"));

    if (characters[i].getAttribute("data-element") === "none") {
        let circleDiv = document.createElement("div");
        let lineDiv = document.createElement("div");

        circleDiv.setAttribute("class", `elem ${recdElem}`);
        characters[i].appendChild(circleDiv);
        lineDiv.setAttribute("class", "line");
        circleDiv.appendChild(lineDiv);
    }
    else {
        recdElem = characters[i].getAttribute("data-element").split(' ');
        for (let j = 0; j < recdElem.length; j++) {
            let circleDiv = document.createElement("div");

            circleDiv.setAttribute("class", `elem ${recdElem[j]}`);
            characters[i].appendChild(circleDiv);
        }
    }
}