"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posibility = void 0;
const data_1 = require("./data");
class Posibility {
    constructor(_name, _type, _link) {
        this.name = _name;
        this.type = _type;
        this.link = _link;
        if (this.type == 0) {
            data_1.posibilityTop.push(this);
        }
        else if (this.type == 1) {
            data_1.posibilityMiddle.push(this);
        }
        else if (this.type == 2) {
            data_1.posibilityBottom.push(this);
        }
    }
}
exports.Posibility = Posibility;
let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
if (path == "index.html" || path == "") {
    let imageTop = document.getElementById("picTop");
    let imageMiddle = document.getElementById("picMiddle");
    let imageBottom = document.getElementById("picBottom");
    window.addEventListener("load", loadImages);
    function loadImages() {
        imageTop.src = selectedElements.top.link;
        imageMiddle.src = selectedElements.middle.link;
        imageBottom.src = selectedElements.bottom.link;
        console.log(selectedElements);
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
//# sourceMappingURL=script.js.map