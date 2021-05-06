"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    Aufgabe2_3.posibilityTop = [];
    Aufgabe2_3.posibilityMiddle = [];
    Aufgabe2_3.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //BigBen Top
    let lt1Top = new Aufgabe2_3.Posibility("BigBen1 - Top", 0, path + "assets/top/bigben1_t.png");
    //BigBen Middle
    let lt1Middle = new Aufgabe2_3.Posibility("BigBen1 - Middle", 1, path + "assets/middle/bigben1_m.png");
    //BigBen Bottom
    let lt1Bottom = new Aufgabe2_3.Posibility("BigBen1 - Bottom", 2, path + "assets/bottom/bigben1_b.png");
    Aufgabe2_3.selectedElements = { top: Aufgabe2_3.posibilityTop[0], middle: Aufgabe2_3.posibilityMiddle[0], bottom: Aufgabe2_3.posibilityBottom[0] };
    //Christus Statue
    let lt2Top = new Aufgabe2_3.Posibility("ChristusStautue2 - Top", 0, path + "assets/top/christusstatue2_t.png");
    let lt2Middle = new Aufgabe2_3.Posibility("ChristusStautue2 - Middle", 1, path + "assets/middle/christusstatue2_m.png");
    let lt2Bottom = new Aufgabe2_3.Posibility("ChristusStautue2 - Bottom", 2, path + "assets/bottom/christusstatue2_b.png");
    //Eiffel Tower
    let lt3Top = new Aufgabe2_3.Posibility("EiffelTower3 - Top", 0, path + "assets/top/eiffeltower3_t.png");
    let lt3Middle = new Aufgabe2_3.Posibility("EiffelTower3 - Middle", 1, path + "assets/middle/eiffeltower3_m.png");
    let lt3Bottom = new Aufgabe2_3.Posibility("EiffelTower3 - Bottom", 2, path + "assets/bottom/eiffeltower3_b.png");
    //Statue of Liberty
    let lt4Top = new Aufgabe2_3.Posibility("StatueOfLieberty4 - Top", 0, path + "assets/top/statueofliberty4_t.png");
    let lt4Middle = new Aufgabe2_3.Posibility("StatueOfLieberty4  - Middle", 1, path + "assets/middle/statueofliberty4_m.png");
    let lt4Bottom = new Aufgabe2_3.Posibility("StatueOfLieberty4  - Bottom", 2, path + "assets/bottom/statueofliberty4_b.png");
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map