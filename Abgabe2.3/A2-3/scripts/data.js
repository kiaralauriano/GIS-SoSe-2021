"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectedElements = exports.posibilityBottom = exports.posibilityMiddle = exports.posibilityTop = void 0;
const script_1 = require("./script");
exports.posibilityTop = [];
exports.posibilityMiddle = [];
exports.posibilityBottom = [];
let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
//BigBen Top
let lt1Top = new script_1.Posibility("BigBen1 - Top", 0, path + "assets/top/bigben1_t.png");
//BigBen Middle
let lt1Middle = new script_1.Posibility("BigBen1 - Middle", 0, path + "assets/middle/bigben1_m.png");
//BigBen Bottom
let lt1Bottom = new script_1.Posibility("BigBen1 - Bottom", 0, path + "assets/bottom/bigben1_b.png");
exports.selectedElements = { top: exports.posibilityTop[0], middle: exports.posibilityMiddle[0], bottom: exports.posibilityBottom[0] };
//Christus Statue
let lt2Top = new script_1.Posibility("ChristusStautue2 - Top", 0, path + "assets/top/christusstatue2_t.png");
let lt2Middle = new script_1.Posibility("ChristusStautue2 - Middle", 0, path + "assets/middle/christusstatue2_m.png");
let lt2Bottom = new script_1.Posibility("ChristusStautue2 - Bottom", 0, path + "assets/bottom/christusstatue2_b.png");
//Eiffel Tower
let lt3Top = new script_1.Posibility("EiffelTower3 - Top", 0, path + "assets/top/eiffeltower3_t.png");
let lt3Middle = new script_1.Posibility("EiffelTower3 - Middle", 0, path + "assets/middle/eiffeltower3_m.png");
let lt3Bottom = new script_1.Posibility("EiffelTower3 - Bottom", 0, path + "assets/bottom/eiffeltower3_b.png");
//Statue of Liberty
let lt4Top = new script_1.Posibility("StatueOfLieberty4 - Top", 0, path + "assets/top/statueofliberty4_t.png");
let lt4Middle = new script_1.Posibility("StatueOfLieberty4  - Middle", 0, path + "assets/middle/statueofliberty4_m.png");
let lt4Bottom = new script_1.Posibility("StatueOfLieberty4  - Bottom", 0, path + "assets/bottom/statueofliberty4_b.png");
//# sourceMappingURL=data.js.map