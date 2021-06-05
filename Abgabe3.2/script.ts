
namespace Aufgabe3_2 {

        let url: string = "http://localhost:8100";

        let formData: FormData = new FormData(document.forms[0]);
        let answerSec: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("solution");

        let btSendJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJSON");
        btSendJSON.addEventListener("click", sendData);
        let btSendHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendHTML");
        btSendHTML.addEventListener("click", sendHTML);

        async function sendHTML(): Promise<void> {
            let answer: Response = await send(url + "/html");
            let text: string = await answer.text();
            answerSec.innerHTML = "Server Result: <br/>" + text;
            
        }

        async function sendData(): Promise<void> {
            let answer: Response = await send(url + "/json");
            let json: JSON = await answer.json();
            console.log("Answer: ");
            console.log(json);
            answerSec.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2)  + "</pre>";
    
        }

        async function send(_url: string): Promise<void> {
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            _url = _url + "?" + query.toString();
            let answer: Response = await fetch(_url);
            return answer;
         }

}
