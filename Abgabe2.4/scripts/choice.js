"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let imageTop = document.getElementById("picTop");
    let imageMiddle = document.getElementById("picMiddle");
    let imageBottom = document.getElementById("picBottom");
    let btSave = document.getElementById("btSave");
    btSave.addEventListener("click", saveSelection);
    let btAbort = document.getElementById("btAbort");
    window.addEventListener("load", loadContent);
    function loadContent() {
        let json = sessionStorage.getItem(Aufgabe2_4.keyConfig);
        if (json != null) {
            selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = Aufgabe2_4.selectedElements.top;
            addDetailWi(posibilityTop);
        }
        else if (path == "middle.html") {
            selected = Aufgabe2_4.selectedElements.middle;
            addDetailWi(posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = Aufgabe2_4.selectedElements.bottom;
            addDetailWi(posibilityBottom);
        }
        if (Aufgabe2_4.selectedElements.top == undefined || Aufgabe2_4.selectedElements.middle == undefined || Aufgabe2_4.selectedElements.bottom == undefined) {
            btSave.textContent = "futher";
            btAbort.textContent = "back";
            if (path == "top.html") {
                btAbort.disabled = true;
            }
            btAbort.addEventListener("click", cancel);
        }
    }
    function loadImages() {
        if (Aufgabe2_4.selectedElements.top != undefined) {
            imageTop.src = Aufgabe2_4.selectedElements.top.link;
        }
        if (Aufgabe2_4.selectedElements.middle != undefined) {
            imageMiddle.src = Aufgabe2_4.selectedElements.middle.link;
        }
        if (Aufgabe2_4.selectedElements.bottom != undefined) {
            imageBottom.src = Aufgabe2_4.selectedElements.bottom.link;
        }
        console.log(Aufgabe2_4.selectedElements);
    }
    function addDetailWi(images) {
        let divToAdd = document.getElementById("selectDetailImg");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
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
    function saveSelection() {
        if (path == "top.html") {
            Aufgabe2_4.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            Aufgabe2_4.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            Aufgabe2_4.selectedElements.bottom = selected;
        }
        selectedToJSON();
        window.open("index.html", "_self");
        console.log("Cancel");
    }
    function back() {
        let pathToOpen;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        }
        else if (path == "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=choice.js.map