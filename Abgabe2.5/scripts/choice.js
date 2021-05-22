"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
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
    async function loadContent() {
        await Aufgabe2_5.getPossibilitysFromURL("data.json");
        let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
        if (json != null) {
            Aufgabe2_5.selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = Aufgabe2_5.selectedElements.top;
            addDetailWi(Aufgabe2_5.posibilityTop);
        }
        else if (path == "middle.html") {
            selected = Aufgabe2_5.selectedElements.middle;
            addDetailWi(Aufgabe2_5.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = Aufgabe2_5.selectedElements.bottom;
            addDetailWi(Aufgabe2_5.posibilityBottom);
        }
        if (Aufgabe2_5.selectedElements.top == undefined || Aufgabe2_5.selectedElements.middle == undefined || Aufgabe2_5.selectedElements.bottom == undefined) {
            btSave.textContent = "next";
            btAbort.textContent = "back";
            if (path == "top.html") {
                btAbort.disabled = true;
            }
            btAbort.addEventListener("click", back);
        }
        else {
            btSave.textContent = "Save";
            btAbort.textContent = "Cancel";
            btAbort.addEventListener("click", cancel);
        }
    }
    function loadImages() {
        if (Aufgabe2_5.selectedElements.top != undefined) {
            imageTop.src = Aufgabe2_5.selectedElements.top.link;
        }
        if (Aufgabe2_5.selectedElements.middle != undefined) {
            imageMiddle.src = Aufgabe2_5.selectedElements.middle.link;
        }
        if (Aufgabe2_5.selectedElements.bottom != undefined) {
            imageBottom.src = Aufgabe2_5.selectedElements.bottom.link;
        }
    }
    function addDetailWi(_images) {
        let divToAdd = document.getElementById("selectDetailImg");
        _images.forEach(img => {
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
    function setSelected(_img, _imgElement) {
        selected = _img;
        _imgElement.className += " selectedImage";
        console.log("selected: " + _img.name);
        htmlImgs.forEach(htmlImg => {
            if (htmlImg != _imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }
    function saveSelection() {
        if (path == "top.html") {
            Aufgabe2_5.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            Aufgabe2_5.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            Aufgabe2_5.selectedElements.bottom = selected;
        }
        Aufgabe2_5.selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }
    function cancel() {
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
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=choice.js.map