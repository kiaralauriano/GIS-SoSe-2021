"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
let selected;
let htmlImgs = [];
let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
window.addEventListener("load", loadContent);
function loadContent() {
    if (path == "top.html") {
        selected = data_1.selectedElements.top;
        addDetailWi(data_1.posibilityTop);
    }
    else if (path == "middle.html") {
        selected = data_1.selectedElements.middle;
        addDetailWi(data_1.posibilityMiddle);
    }
    else if (path == "bottom.html") {
        selected = data_1.selectedElements.bottom;
        addDetailWi(data_1.posibilityBottom);
    }
}
function addDetailWi(images) {
    let divToAdd = document.getElementById("selectDetailImg");
    images.forEach(img => {
        let imgElement = document.createElement("img");
        htmlImgs.push(imgElement);
        imgElement.className += "detailImg";
        imgElement.src = img.link;
        if (img == selected) {
            setSelected(img, imgElement);
        }
        imgElement.addEventListener("click", function () {
            setSelected(img, imgElement);
        });
        divToAdd.appendChild(imgElement);
    });
}
function setSelected(img, imgElement) {
    selected = img;
    imgElement.className += " selectedImage";
    console.log("selected: " + img.name);
    htmlImgs.forEach(htmlImg => {
        if (htmlImg != imgElement) {
            htmlImg.classList.remove("selectedImage");
        }
    });
}
let btSave = document.getElementById("btSave");
btSave.addEventListener("click", saveSelection);
let btAbort = document.getElementById("btAbort");
btAbort.addEventListener("click", cancelSelection);
function saveSelection() {
    if (path == "top.html") {
        data_1.selectedElements.top = selected;
    }
    else if (path == "middle.html") {
        data_1.selectedElements.middle = selected;
    }
    else if (path == "bottom.html") {
        data_1.selectedElements.bottom = selected;
    }
    window.open("index.html", "_self");
    console.log("selected: " + selected.name);
}
function cancelSelection() {
    window.open("index.html", "_self");
    console.log("cancel");
}
//# sourceMappingURL=choice.js.map