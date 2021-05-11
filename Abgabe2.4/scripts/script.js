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
                this.removeSameFromArray(posibilityTop, this.name);
                posibilityTop.unshift(this);
            }
            else if (this.type == 1) {
                this.removeSameFromArray(posibilityMiddle, this.name);
                posibilityMiddle.unshift(this);
            }
            else if (this.type == 2) {
                this.removeSameFromArray(posibilityBottom, this.name);
                posibilityBottom.unshift(this);
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
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        let imageTop = document.getElementById("picTop");
        let imageMiddle = document.getElementById("picMiddle");
        let imageBottom = document.getElementById("picBottom");
        window.addEventListener("load", loadImages);
        function loadImages() {
            imageTop.src = Aufgabe2_4.selectedElements.top.link;
            imageMiddle.src = Aufgabe2_4.selectedElements.middle.link;
            imageBottom.src = Aufgabe2_4.selectedElements.bottom.link;
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