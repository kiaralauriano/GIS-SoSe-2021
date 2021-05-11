"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.posibilityTop = [];
    Aufgabe2_4.posibilityMiddle = [];
    Aufgabe2_4.posibilityBottom = [];
    //BigBen Top
    let lt1Top = new Aufgabe2_4.Posibility("BigBen1 - Top", 0, "assets/top/bigben1_t.png");
    //BigBen Middle
    let lt1Middle = new Aufgabe2_4.Posibility("BigBen1 - Middle", 1, "assets/middle/bigben1_m.png");
    //BigBen Bottom
    let lt1Bottom = new Aufgabe2_4.Posibility("BigBen1 - Bottom", 2, "assets/bottom/bigben1_b.png");
    //Christus Statue
    let lt2Top = new Aufgabe2_4.Posibility("ChristusStautue2 - Top", 0, "assets/top/christusstatue2_t.png");
    let lt2Middle = new Aufgabe2_4.Posibility("ChristusStautue2 - Middle", 1, "assets/middle/christusstatue2_m.png");
    let lt2Bottom = new Aufgabe2_4.Posibility("ChristusStautue2 - Bottom", 2, "assets/bottom/christusstatue2_b.png");
    //Eiffel Tower
    let lt3Top = new Aufgabe2_4.Posibility("EiffelTower3 - Top", 0, "assets/top/eiffeltower3_t.png");
    let lt3Middle = new Aufgabe2_4.Posibility("EiffelTower3 - Middle", 1, "assets/middle/eiffeltower3_m.png");
    let lt3Bottom = new Aufgabe2_4.Posibility("EiffelTower3 - Bottom", 2, "assets/bottom/eiffeltower3_b.png");
    //Statue of Liberty
    let lt4Top = new Aufgabe2_4.Posibility("StatueOfLieberty4 - Top", 0, "assets/top/statueofliberty4_t.png");
    let lt4Middle = new Aufgabe2_4.Posibility("StatueOfLieberty4  - Middle", 1, "assets/middle/statueofliberty4_m.png");
    let lt4Bottom = new Aufgabe2_4.Posibility("StatueOfLieberty4  - Bottom", 2, "assets/bottom/statueofliberty4_b.png");
    allPosArrayFromJSON(allPosArrayToJSON());
    function allPosArrayToJSON() {
        let allPosArray = { top: Aufgabe2_4.posibilityTop, middle: Aufgabe2_4.posibilityMiddle, bottom: Aufgabe2_4.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }
    Aufgabe2_4.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        Aufgabe2_4.posibilityTop = [];
        Aufgabe2_4.posibilityMiddle = [];
        Aufgabe2_4.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posIf = json[key];
                posIf.forEach(pos => {
                    new Aufgabe2_4.Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }
    Aufgabe2_4.allPosArrayFromJSON = allPosArrayFromJSON;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map