"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let urlServer = "http://localhost:8100";
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendData);
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let url = urlServer + "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        console.log("Response: ", answer);
        let json = await answer.json();
        console.log(json);
        // document.getElementById("solution").innerHTML = json;
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map