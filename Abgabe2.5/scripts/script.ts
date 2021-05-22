namespace Aufgabe2_5 {
//import { posibilityBottom, posibilityMiddle, posibilityTop } from "./data";
    export let keyConfig: string = "ConfigJson";
    export let selectedElements: Selected = {top: undefined, middle: undefined, bottom: undefined};
    export class Posibility {
        name: string;
        type: number;
        link: string;

        constructor(_name: string, _type: number, _link: string) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
        }

        removeSameFromArray(_posArray: Posibility[], _name: string): void {
            _posArray.forEach((element, i) => {
                if (element.name == _name) {
                    _posArray.splice(i, 1);
                }
            });
        }
        getInterface(): PosibilityInterface {
            return { name: this.name, type: this.type, link: this.link };
        }

    }

    export interface PosibilityInterface {
        name: string;
        type: number;
        link: string;
    }

    export interface Selected {
        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    export interface AllPosArrayInterface {
        top: Posibility[];
        middle: Posibility[];
        bottom: Posibility[];
    }

    export function selectedToJSON(): void {
        let json: string;
        json = JSON.stringify(selectedElements);
        sessionStorage.setItem(keyConfig, json);
    }

    export function selectedFromJSON(_jsonStr: string): void {
        let json: Selected = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos: PosibilityInterface = json[key];
                let topPos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.top = topPos;
            } else if (key == "middle") {
                let pos: PosibilityInterface = json[key];
                let middlePos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.middle = middlePos;
            } else if (key == "bottom") {
                let pos: PosibilityInterface = json[key];
                let bottomPos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.bottom = bottomPos; 
            }
        });
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    
    if (path == "index.html" || path == "" ) {
        window.addEventListener("load", finishedLoading);

        function finishedLoading(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                } else if (selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                } else if (selectedElements.bottom == undefined) {
                    window.open("bottom.html", "_self");
                } else {
                    window.open("end.html", "_self");
                }
            } else {
                console.log("No selection made");
                window.open("top.html", "_self");
            }
        }
    } else if (path == "end.html") {
        let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("picTop");
        let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("picMiddle");
        let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("picBottom");

        window.addEventListener("load", finishedLoading);

        function finishedLoading(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
                sendCacheToServer("https://gis-communication.herokuapp.com/");
            } else {
                console.log("No selection made");
                loadImages();
                }
            }
        
        function loadImages(): void {
            if (selectedElements.top != undefined) {
                imageTop.src = selectedElements.top.link;
            }
            if (selectedElements.middle != undefined) {
                imageMiddle.src = selectedElements.middle.link;
            }
            if (selectedElements.bottom != undefined) {
                imageBottom.src = selectedElements.bottom.link;
            }
        }

        let btEditTop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btTop");
        btEditTop.addEventListener("click", openDetailTop);
        let btEditMiddle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btMiddle");
        btEditMiddle.addEventListener("click", openDetailMiddle);
        let btEditBottom: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btBottom");
        btEditBottom.addEventListener("click", openDetailBottom);

        function openDetailTop(): void {
            window.open("top.html", "_self");
            console.log("Open Detail Top");
        }
        function openDetailMiddle(): void {
            window.open("middle.html", "_self");
            console.log("Open Detail Middle");
        }
        function openDetailBottom(): void {
            window.open("bottom.html", "_self");
            console.log("Open Detail Bottom");
        }

        async function sendCacheToServer(_url: string): Promise<void> {
            let browserCacheData: JSON = JSON.parse(sessionStorage.getItem(keyConfig));
            console.log("Send saved Elements to Server:");
            console.log(browserCacheData);
            let query: URLSearchParams = new URLSearchParams(<any>browserCacheData);
            _url = _url + "?" + query.toString();
            let resp: Response = await fetch(_url);
            let text: ServerAntwort = await resp.json();
            showServerAnswer(text);
            
        }

        interface ServerAntwort {
            error: string;
            message: string;
        }

        function showServerAnswer(_answer: ServerAntwort): void {
            let statusField: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverAusgabe");
            if (_answer.message != undefined) {
                statusField.textContent = "Service-Answer: " + _answer.message;
                statusField.style.color = "green";
            } else if (_answer.error != undefined) {
                statusField.textContent = "Service-Answer: " + _answer.error;
                statusField.style.color = "red";
            }
        }


    }
}  
