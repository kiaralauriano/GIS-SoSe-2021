/* ---------------------------------
1 a)
--------------------------------- */
console.log("Min ist: " + min(0, 20, 13, -1, 5));

function min(...nr: number[]): number {
    let smallest: number = nr[0];
    for (let index: number = 0; index < nr.length; index++) {
        const actNr: number = nr[index];
        if (actNr < smallest) {
            smallest = actNr;
        }
    }
    return smallest;
}