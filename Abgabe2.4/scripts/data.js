"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPosArrayFromJSON = void 0;
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.posibilityTop = [];
    Aufgabe2_4.posibilityMiddle = [];
    Aufgabe2_4.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //BigBen Top
    let lt1Top = new Posibility("BigBen1 - Top", 0, path + "assets/top/bigben1_t.png");
    //BigBen Middle
    let lt1Middle = new Posibility("BigBen1 - Middle", 1, path + "assets/middle/bigben1_m.png");
    //BigBen Bottom
    let lt1Bottom = new Posibility("BigBen1 - Bottom", 2, path + "assets/bottom/bigben1_b.png");
    Aufgabe2_4.selectedElements = { top: Aufgabe2_4.posibilityTop[0], middle: Aufgabe2_4.posibilityMiddle[0], bottom: Aufgabe2_4.posibilityBottom[0] };
    //Christus Statue
    let lt2Top = new Posibility("ChristusStautue2 - Top", 0, path + "assets/top/christusstatue2_t.png");
    let lt2Middle = new Posibility("ChristusStautue2 - Middle", 1, path + "assets/middle/christusstatue2_m.png");
    let lt2Bottom = new Posibility("ChristusStautue2 - Bottom", 2, path + "assets/bottom/christusstatue2_b.png");
    //Eiffel Tower
    let lt3Top = new Posibility("EiffelTower3 - Top", 0, path + "assets/top/eiffeltower3_t.png");
    let lt3Middle = new Posibility("EiffelTower3 - Middle", 1, path + "assets/middle/eiffeltower3_m.png");
    let lt3Bottom = new Posibility("EiffelTower3 - Bottom", 2, path + "assets/bottom/eiffeltower3_b.png");
    //Statue of Liberty
    let lt4Top = new Posibility("StatueOfLieberty4 - Top", 0, path + "assets/top/statueofliberty4_t.png");
    let lt4Middle = new Posibility("StatueOfLieberty4  - Middle", 1, path + "assets/middle/statueofliberty4_m.png");
    let lt4Bottom = new Posibility("StatueOfLieberty4  - Bottom", 2, path + "assets/bottom/statueofliberty4_b.png");
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
allPosArrayFromJSON(allPosArrayFromJSON());
function allPosArrayFromJSON() {
    let allPosArray = { top: posibilityTop, middle: posibilityMiddle, bottom: posibilityBottom };
    let json = JSON.stringify(allPosArray);
    console.log(json);
    return json;
}
exports.allPosArrayFromJSON = allPosArrayFromJSON;
function allPosArrayFromJSON(jsonStr) {
    posibilityTop = [];
    posibilityMiddle = [];
    posibilityBottom = [];
    let json = JSON.parse(jsonStr);
    Object.keys(json).forEach(key => {
        if (key == "top" || key == "middle" || key == "bottom") {
            let posIf = json[key];
            posIf.forEach(pos => {
                new Posibility(pos.name, pos.type, pos.link);
            });
        }
    });
}
exports.allPosArrayFromJSON = allPosArrayFromJSON;
//# sourceMappingURL=data.js.map