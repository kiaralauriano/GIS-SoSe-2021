"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    //import { posibilityBottom, posibilityMiddle, posibilityTop } from "./data";
    Aufgabe2_4.keyConfig = "ConfigJson";
    Aufgabe2_4.selectedElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                this.removeSameFromArray(Aufgabe2_4.posibilityTop, this.name);
                Aufgabe2_4.posibilityTop.unshift(this);
            }
            else if (this.type == 1) {
                this.removeSameFromArray(Aufgabe2_4.posibilityMiddle, this.name);
                Aufgabe2_4.posibilityMiddle.unshift(this);
            }
            else if (this.type == 2) {
                this.removeSameFromArray(Aufgabe2_4.posibilityBottom, this.name);
                Aufgabe2_4.posibilityBottom.unshift(this);
            }
        }
        removeSameFromArray(posArray, name) {
            posArray.forEach((element, i) => {
                if (element.name == name) {
                    posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    Aufgabe2_4.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(Aufgabe2_4.selectedElements);
        console.log(json);
        sessionStorage.setItem(Aufgabe2_4.keyConfig, json);
    }
    Aufgabe2_4.selectedToJSON = selectedToJSON;
    function selectedFromJSON(jsonStr) {
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectedElements.top = topPos;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectedElements.middle = middlePos;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectedElements.bottom = bottomPos;
            }
        });
    }
    Aufgabe2_4.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(Aufgabe2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (Aufgabe2_4.selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                }
                else if (Aufgabe2_4.selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                }
                else if (Aufgabe2_4.selectedElements.bottom == undefined) {
                    window.open("bottom.html", "_self");
                }
                else {
                    window.open("end.html", "_self");
                }
            }
            else {
                console.log("No selection made");
                window.open("top.html", "_self");
            }
        }
    }
    else if (path == "end.html") {
        let imageTop = document.getElementById("picTop");
        let imageMiddle = document.getElementById("picMiddle");
        let imageBottom = document.getElementById("picBottom");
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(Aufgabe2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
            }
            else {
                console.log("No selection made");
                loadImages();
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
        let btEditTop = document.getElementById("btTop");
        btEditTop.addEventListener("click", openDetailTop);
        let btEditMiddle = document.getElementById("btMiddle");
        btEditMiddle.addEventListener("click", openDetailMiddle);
        let btEditBottom = document.getElementById("btBottom");
        btEditBottom.addEventListener("click", openDetailBottom);
        function openDetailTop() {
            window.open("top.html", "_self");
            console.log("Open Detail Top");
        }
        function openDetailMiddle() {
            window.open("middle.html", "_self");
            console.log("Open Detail Middle");
        }
        function openDetailBottom() {
            window.open("bottom.html", "_self");
            console.log("Open Detail Bottom");
        }
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map