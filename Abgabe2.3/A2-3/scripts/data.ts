export let posibilityTop: Posibility[] = [];
export let posibilityMiddle: Posibility[] = [];
export let posibilityBottom: Posibility[] = [];

let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

//BigBen Top
let lt1Top: Posibility = new posibilityBottom("bigben1 - Top", 0, path + "assests/top/bigben1_t.png");