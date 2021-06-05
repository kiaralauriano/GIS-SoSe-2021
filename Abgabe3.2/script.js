"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let url = "http://localhost:8100";
    let formData = new FormData(document.forms[0]);
    let answerSec = document.getElementById("solution");
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendData);
    let btSendHTML = document.getElementById("sendHTML");
    btSendHTML.addEventListener("click", sendHTML);
    async function sendHTML() {
        let answer = await send(url + "/html");
        let text = await answer.text();
        answerSec.innerHTML = "Server Result: <br/>" + text;
    }
    async function sendData() {
        let answer = await send(url + "/json");
        let json = await answer.json();
        console.log("Answer: ");
        console.log(json);
        answerSec.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2) + "</pre>";
    }
    async function send(_url) {
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        return answer;
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map