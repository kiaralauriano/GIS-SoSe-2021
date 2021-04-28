"use strict";
/* ---------------------------------
1 a)
--------------------------------- */
console.log("Min ist: " + min(0, 20, 13, -1, 5));
function min(...nr) {
    let smallest = nr[0];
    for (let index = 0; index < nr.length; index++) {
        const actNr = nr[index];
        if (actNr < smallest) {
            smallest = actNr;
        }
    }
    return smallest;
}
//# sourceMappingURL=script.js.map