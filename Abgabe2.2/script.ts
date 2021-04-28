/* ---------------------------------
1 a)
--------------------------------- */
console.log("Die kleinste Zahl ist: " + min(0, 20, 13, -1, 5));

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
/* ---------------------------------
1 b)
--------------------------------- */
console.log("50 ist: " + isEven(50));
console.log("75 ist: " + isEven(75));
console.log("-1 ist: " + isEven(-1)); // Es geht nicht, da es ein Minuswert ist und sich dadurch eine unendliche Rekursion ergibt.

function isEven(nr: number): boolean {
    // Ergaenzung fuer negative Zahlen
    if (nr < 0) {
       nr = 0 - nr;
    }
    // b) Aufgabe
    if (nr == 0) {
        return true;
    } else if (nr == 1) {
        return false;
    } else {
        return isEven(nr - 2);
    }
}
/* ---------------------------------
1 c) 1.-4.
--------------------------------- */
/*
let stRiver: Student = {surName: "River", lastName: "Miller", age: 22, matNr: 12345, sex: "♂ (m)"};
let stChloe: Student = {surName: "Chloe", lastName: "Smith", age: 24, matNr: 56789, sex: "♀ (w)"};
let stTrevor: Student = {surName: "Trevor", lastName: "Gomez", age: 27, matNr: 98765, sex: "♂ (m)"};

let stArray: Student[] = [stRiver, stChloe, stTrevor];
stArray.push({surName: "Courtney", lastName: "Lance", age: 19, matNr: 54321, sex: "♂ (m)"});
console.log(stRiver.surName + " ist " + stRiver.age + " Jahre alt.");

interface Student {
    surName: String;
    lastName: String;
    age: number;
    matNr: number;
    sex: String;
}

for (const studi of stArray) {
        showInfo(studi);
}

function showInfo(studi: Student): void {
    console.log("Name: " + studi.surName + " " + studi.lastName);
    console.log("Alter: " + studi.age);
    console.log("Geschlecht: " + studi.sex);
    console.log("Mat.-Nr.: " + studi.matNr);
    console.log();
}
/* ---------------------------------
1 c) 5.
--------------------------------- */
class Student {
    surName: String;
    lastName: String;
    age: number;
    matNr: number;
    sex: String;

    constructor(_surName: String, _lastName: String, _age: number, _matNr: number, _sex: String) {
        this.surName = _surName;
        this.lastName = _lastName;
        this.age = _age;
        this.matNr = _matNr;
        this.sex = _sex;
    }

    showInfo(): void {
        console.log("Name: " + this.surName + " " + this.lastName);
        console.log("Alter: " + this.age);
        console.log("Geschlecht: " + this.sex);
        console.log("Mat.-Nr.: " + this.matNr);
    }
}
let stRiver: Student = new Student("River", "Miller", 22, 12345, "♂ (m)");
stRiver.showInfo();

/* ---------------------------------
2 a)
--------------------------------- */
function backwards(array: number[]): number[] {
    let backwardArray: number[] = [];
    for (let index: number = array.length - 1; index >= 0; index--) {
        backwardArray[index] = array[array.length - index - 1];
    }
    return backwardArray;
}
/* ---------------------------------
2 b)
--------------------------------- */
function join(...arrays: number[][]): number[] {
    let backArray: number[] = [];
    let retIndex: number = 0;
    arrays.forEach(array => {
        for (let index: number = 0; index < array.length; index++) {
            backArray[retIndex] = array[index];
            retIndex++;
        }
    });
    return backArray;
}
/* ---------------------------------
2 c)
--------------------------------- */
function split(array: number[], i1: number, i2: number): number[] {
    if (i1 < 0 || i2 < 0) {
        return undefined;
    } else if (i2 < i1) {
        let temp: number = i1;
        i1 = i2;
        i2 = temp;
    } else if (i2 > array.length) {
        return undefined;
    }
    let backArray: number[] = [];
    let i: number = 0;
    for (let index: number = i1; index <= i2; index++) {
        backArray[i] = array[index];
        i++;
    }
    return backArray;
}
/* ---------------------------------
2 Testcode
--------------------------------- */
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)
/* ---------------------------------
3 a)
--------------------------------- */
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

// Himmel
context.fillStyle = "blue";
context.fillRect(0, 0, 800, 600);

// Grass
context.fillStyle = "green";
context.fillRect(0, 300, 800, 200);

// Wolke
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.fillStyle = "#8ED6FF";
context.fill();
context.closePath();

// Baum
context.fillStyle = "brown";
context.fillRect(175, 100, 50, 300);
context.beginPath();
context.fillStyle = "darkgreen";
context.arc(200, 150, 75, 0, 2 * Math.PI, false);
context.fill();
context.closePath();

// Haus
context.fillStyle = "beige";
context.fillRect(500, 250, 200, 200);
context.beginPath();
context.fillStyle = "red";
context.moveTo(470, 250);
context.lineTo(730, 250);
context.lineTo(600, 50);
context.fill();
context.closePath();
/* ---------------------------------
3 b)+c)
--------------------------------- */
class Rechteck {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    maxWidth: number = 750;
    maxHeight: number = 450;

    constructor() {
        this.x1 = this.getRandomInt(0, this.maxWidth);
        this.x2 = this.getRandomInt(this.x1, this.maxWidth);
        this.y1 = this.getRandomInt(0, this.maxHeight);
        this.y2 = this.getRandomInt(this.y1, this.maxHeight);
    }

    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

/* ---------------------------------
3 d)+ e)
--------------------------------- */
    drawRect(): void {
        context.beginPath();
        context.fillStyle = "purple";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x1, this.y2);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let rechtArray: Rechteck [] = [new Rechteck(), new Rechteck(), new Rechteck()];
for (const recht of rechtArray) {
    recht.drawRect();
}



