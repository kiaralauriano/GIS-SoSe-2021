"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let formData = new FormData(document.forms[0]);
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", send);
    async function send() {
        let url = "https://kiaralauriano.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map