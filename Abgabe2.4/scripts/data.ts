namespace Aufgabe2_4 {


export let posibilityTop: Posibility[] = [];
export let posibilityMiddle: Posibility[] = [];
export let posibilityBottom: Posibility[] = [];

let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

//BigBen Top
let lt1Top: Posibility = new Posibility("BigBen1 - Top", 0, path + "assets/top/bigben1_t.png");

//BigBen Middle
let lt1Middle: Posibility = new Posibility("BigBen1 - Middle", 1, path + "assets/middle/bigben1_m.png");

//BigBen Bottom
let lt1Bottom: Posibility = new Posibility("BigBen1 - Bottom", 2, path + "assets/bottom/bigben1_b.png");

export let selectedElements: Selected = {top: posibilityTop[0], middle: posibilityMiddle[0], bottom: posibilityBottom[0]};

//Christus Statue
let lt2Top: Posibility = new Posibility("ChristusStautue2 - Top", 0, path + "assets/top/christusstatue2_t.png");
let lt2Middle: Posibility = new Posibility("ChristusStautue2 - Middle", 1, path + "assets/middle/christusstatue2_m.png");
let lt2Bottom: Posibility = new Posibility("ChristusStautue2 - Bottom", 2, path + "assets/bottom/christusstatue2_b.png");

//Eiffel Tower
let lt3Top: Posibility = new Posibility("EiffelTower3 - Top", 0, path + "assets/top/eiffeltower3_t.png");
let lt3Middle: Posibility = new Posibility("EiffelTower3 - Middle", 1, path + "assets/middle/eiffeltower3_m.png");
let lt3Bottom: Posibility = new Posibility("EiffelTower3 - Bottom", 2, path + "assets/bottom/eiffeltower3_b.png");

//Statue of Liberty
let lt4Top: Posibility = new Posibility("StatueOfLieberty4 - Top", 0, path + "assets/top/statueofliberty4_t.png");
let lt4Middle: Posibility = new Posibility("StatueOfLieberty4  - Middle", 1, path + "assets/middle/statueofliberty4_m.png");
let lt4Bottom: Posibility = new Posibility("StatueOfLieberty4  - Bottom", 2, path + "assets/bottom/statueofliberty4_b.png");
}

allPosArrayFromJSON(allPosArrayFromJSON());

export function allPosArrayFromJSON(): string {
    let allPosArray: AllPosArrayInterface = {top: posibilityTop, middle: posibilityMiddle, bottom: posibilityBottom};
    let json: string = JSON.stringify(allPosArray);
    console.log(json);
    return json;
}

export function allPosArrayFromJSON(jsonStr: string): void { 
    posibilityTop = [];
    posibilityMiddle = [];
    posibilityBottom = [];
    let json: AllPosArrayInterface = JSON.parse(jsonStr);
    Object.keys(json).forEach(key => {
        if (key == "top" || key == "middle" || key == "bottom") {
            let posIf: PosibilityInterface[] = json[key];
            posIf.forEach(pos => {
                new Posibility(pos.name, pos.type, pos.link);
            });
        }
    });

}