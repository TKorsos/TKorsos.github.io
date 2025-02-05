let body = document.querySelector("body");
let title = document.querySelector(".title");
let thisYear = document.querySelector("#js-year");
const titleObj = {
    "plebania": "Plébánia",
    "templom": "Plébánia, templom, urnatemető",
}

function titleProcess() {
    let title = "";
    for (let k in titleObj) {
        if(body.dataset.id === k) {
            title = titleObj[k];
        }
    }
    return title;
}

function copyYear() {
    const d = new Date();
    let year = d.getFullYear();
    return year;
}

function render() {
    title.innerText = titleProcess();
    thisYear.innerText = copyYear();
}

render();