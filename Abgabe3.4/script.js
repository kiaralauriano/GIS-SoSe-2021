"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let result = document.getElementById("solution");
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", sendData);
    let btBack = document.getElementById("giveback");
    btBack.addEventListener("click", getData);
    let form = document.getElementById("form");
    let urlServer = "http://localhost:8100";
    //let urlServer: string = "https://kiaralauriano.herokuapp.com";
    async function sendData() {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.append("command", "insert");
        let url = urlServer + "?" + query.toString();
        let response = await fetch(url);
        let textAnswer = await response.text();
        console.log(textAnswer);
        form.reset();
    }
    async function getData() {
        let query = new URLSearchParams();
        query.append("command", "get");
        let url = urlServer + "?" + query.toString();
        let response = await fetch(url);
        let jsonAnswer = await response.json();
        result.innerText = JSON.stringify(jsonAnswer);
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map