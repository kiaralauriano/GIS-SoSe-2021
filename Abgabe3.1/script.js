"use strict";
document.getElementsByTagName("button")[0].addEventListener("click", sendData);
async function sendData() {
    let formData = new FormData(document.forms[0]);
    let url = "https://kiaralauriano.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let answer = await fetch(url);
    console.log("Response: ", answer);
    let back = await answer.text();
    console.log(back);
}
//# sourceMappingURL=script.js.map