namespace Aufgabe2_3 {


let selected: Posibility;
let htmlImgs: HTMLImageElement[] = [];
let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

window.addEventListener("load", loadContent);

function loadContent(): void {
    if (path == "top.html") {
        selected = selectedElements.top;
        addDetailWi(posibilityTop);
    } else if (path == "middle.html") {
        selected = selectedElements.middle;
        addDetailWi(posibilityMiddle);
    } else if (path == "bottom.html") { 
        selected = selectedElements.bottom;
        addDetailWi(posibilityBottom);
    }
}

function addDetailWi(images: Posibility[]): void {
    let divToAdd: HTMLDivElement = <HTMLDivElement>document.getElementById("selectDetailImg");
    images.forEach(img => {
        let imgElement: HTMLImageElement = document.createElement("img");
        htmlImgs.push(imgElement);
        imgElement.className += "detailImg";
        imgElement.src = img.link;
        if (img == selected) {
            setSelected(img, imgElement);
        }
        imgElement.addEventListener("click", function(): void {
            setSelected(img, imgElement);
        });
        divToAdd.appendChild(imgElement);
    });
}
function setSelected(img: Posibility, imgElement: HTMLImageElement): void {
    selected = img;
    imgElement.className += " selectedImage";
    console.log("selected: " + img.name);
    htmlImgs.forEach(htmlImg => {
        if (htmlImg != imgElement) {
            htmlImg.classList.remove("selectedImage");
        }
    });
}

let btSave: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btSave");
btSave.addEventListener("click", saveSelection);
let btAbort: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btAbort");
btAbort.addEventListener("click", cancelSelection);

function saveSelection(): void {
    if (path == "top.html") {
        selectedElements.top = selected;
    } else if (path == "middle.html") {
        selectedElements.middle = selected;
    } else if (path == "bottom.html") { 
        selectedElements.bottom = selected;
    }
    window.open("index.html", "_self");
    console.log("selected: " + selected.name);
}

function cancelSelection(): void {
    window.open("index.html", "_self");
    console.log("cancel");
}

}