namespace Aufgabe2_4 {
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
        if (this.type == 0) {
            this.removeSameFromArray(posibilityTop, this.name);
            posibilityTop.unshift(this);            
        } else if (this.type == 1) {
            this.removeSameFromArray(posibilityMiddle, this.name);
            posibilityMiddle.unshift(this);
        } else if (this.type == 2) {
            this.removeSameFromArray(posibilityBottom, this.name);
            posibilityBottom.unshift(this);
        }
    }
    removeSameFromArray(posArray: Posibility[], name: string): void {
        posArray.forEach((element, i) => {
            if (element.name == name) {
                posArray.splice(i, 1);
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
    top: Posibility;
    middle: Posibility;
    bottom: Posibility;
}

let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
if (path == "index.html" || path == "" ) {
    let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("picTop");
    let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("picMiddle");
    let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("picBottom");

    window.addEventListener("load", loadImages);

    function loadImages(): void {
        imageTop.src = selectedElements.top.link;
        imageMiddle.src = selectedElements.middle.link;
        imageBottom.src = selectedElements.bottom.link;
        console.log(selectedElements);
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


}
}