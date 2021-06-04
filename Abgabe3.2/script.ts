namespace Aufgabe3_2 {
    let urlServer: string = "http://localhost:8100";
    let btSendJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendData);

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = urlServer + "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        console.log("Response: ", answer);
        let json: JSON = await answer.json();
        console.log(json);
       // document.getElementById("solution").innerHTML = json;
    }

}


