"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    //import { posibilityBottom, posibilityMiddle, posibilityTop } from "./data";
    Aufgabe2_5.keyConfig = "ConfigJson";
    Aufgabe2_5.selectedElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
        }
        removeSameFromArray(_posArray, _name) {
            _posArray.forEach((element, i) => {
                if (element.name == _name) {
                    _posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    Aufgabe2_5.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(Aufgabe2_5.selectedElements);
        sessionStorage.setItem(Aufgabe2_5.keyConfig, json);
    }
    Aufgabe2_5.selectedToJSON = selectedToJSON;
    function selectedFromJSON(_jsonStr) {
        let json = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectedElements.top = topPos;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectedElements.middle = middlePos;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPos = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectedElements.bottom = bottomPos;
            }
        });
    }
    Aufgabe2_5.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (Aufgabe2_5.selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                }
                else if (Aufgabe2_5.selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                }
                else if (Aufgabe2_5.selectedElements.bottom == undefined) {
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
            let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
                sendCacheToServer("https://gis-communication.herokuapp.com/");
            }
            else {
                console.log("No selection made");
                loadImages();
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
        async function sendCacheToServer(_url) {
            let browserCacheData = JSON.parse(sessionStorage.getItem(Aufgabe2_5.keyConfig));
            console.log("Send saved Elements to Server:");
            console.log(browserCacheData);
            let query = new URLSearchParams(browserCacheData);
            _url = _url + "?" + query.toString();
            let resp = await fetch(_url);
            let text = await resp.json();
            showServerAnswer(text);
        }
        function showServerAnswer(_answer) {
            let statusField = document.getElementById("serverAusgabe");
            if (_answer.message != undefined) {
                statusField.textContent = "Service-Answer: " + _answer.message;
                statusField.style.color = "green";
            }
            else if (_answer.error != undefined) {
                statusField.textContent = "Service-Answer: " + _answer.error;
                statusField.style.color = "red";
            }
        }
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map