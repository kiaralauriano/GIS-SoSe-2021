"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    Aufgabe2_5.posibilityTop = [];
    Aufgabe2_5.posibilityMiddle = [];
    Aufgabe2_5.posibilityBottom = [];
    function allPosArrayToJSON() {
        let allPosArray = { top: Aufgabe2_5.posibilityTop, middle: Aufgabe2_5.posibilityMiddle, bottom: Aufgabe2_5.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        return json;
    }
    Aufgabe2_5.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(_jsonStr) {
        Aufgabe2_5.posibilityTop = [];
        Aufgabe2_5.posibilityMiddle = [];
        Aufgabe2_5.posibilityBottom = [];
        let json = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posIf = json[key];
                posIf.forEach(pos => {
                    let posibility = new Aufgabe2_5.Posibility(pos.name, pos.type, pos.link);
                    if (posibility.type == 0) {
                        posibility.removeSameFromArray(Aufgabe2_5.posibilityTop, posibility.name);
                        Aufgabe2_5.posibilityTop.unshift(posibility);
                    }
                    else if (posibility.type == 1) {
                        posibility.removeSameFromArray(Aufgabe2_5.posibilityMiddle, posibility.name);
                        Aufgabe2_5.posibilityMiddle.unshift(posibility);
                    }
                    else if (posibility.type == 2) {
                        posibility.removeSameFromArray(Aufgabe2_5.posibilityBottom, posibility.name);
                        Aufgabe2_5.posibilityBottom.unshift(posibility);
                    }
                });
            }
        });
    }
    Aufgabe2_5.allPosArrayFromJSON = allPosArrayFromJSON;
    async function getPossibilitysFromURL(_url) {
        let response = await fetch(_url);
        let json = await response.text();
        allPosArrayFromJSON(json);
    }
    Aufgabe2_5.getPossibilitysFromURL = getPossibilitysFromURL;
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=data.js.map