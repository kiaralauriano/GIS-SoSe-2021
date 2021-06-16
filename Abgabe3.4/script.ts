namespace Aufgabe3_4 {
    
    let result: HTMLParagraphElement = <HTMLDivElement>document.getElementById("solution"); 
    let btSend: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    btSend.addEventListener("click", sendData);
    let btBack: HTMLButtonElement = <HTMLButtonElement>document.getElementById("giveback");
    btBack.addEventListener("click", getData);
    let form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
    
    let urlServer: string = "http://localhost:8100";
    //let urlServer: string = "https://kiaralauriano.herokuapp.com";

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<URLSearchParams>formData);
        query.append("command", "insert");
        let url: string = urlServer + "?" + query.toString();
        let response: Response = await fetch(url);
        let textAnswer: string = await response.text();
        console.log(textAnswer);
        form.reset();
     }

    interface DBUser {
        fname: string;
        nname: string;
        email: string;
        password: string;
    }

    async function getData(): Promise<void> {
        let query: URLSearchParams = new URLSearchParams();
        query.append("command", "get");
        let url: string = urlServer + "?" + query.toString();
        let response: Response = await fetch(url);
        let jsonAnswer: DBUser = await response.json();
        result.innerText = JSON.stringify(jsonAnswer);
    }
 }