/* function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log(x);
    func2();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Gute!");
}
function func2(): void {
    console.log("Klar?");
}*/


/* ---------------------------------
1 
a) Aus der Konsole wird "Alles", "Klar?" und "Logo!" ausgegeben.
"x" ist der Variblennamen, deshalb kann man "x" immer umbenennen. 
Man muss beachten dass man den gleichen Variablennamen in let und log hat.
b) Zuerst wird Zeile 3 ausgeführt, heißt "Alles" wird ausgegeben. 
Dann wird Zeile 4 ausgeführt, dadurch kommen wir in Zeile 11 und "Klar?" wird ausgegeben.
Und dann Zeile 5 und es wird "Logo!" ausgegeben.
--------------------------------- */

/*function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();*/
/* ---------------------------------
2 
a) Es werden Zahlen 9-1 ausgegeben, rückwärts.
Es verändert sich in der do Funktion was. Wir fügen in i = 9 ein.
Dann wird jeweils die Zahl so lange subtrahiert bis es größer ist als 0.
Heißt bis 1. Dann wird alles ausgegeben und man kommt aus der Schleife raus.
b)
--------------------------------- */
/* ---------------------------------
3 
a) A1 let als Variable "y" setzen und nicht "x" log ändern, findet die Console nicht "x".
Und das Terminal sagt dass "y" deklariert ist, aber nirgendwo gefunden wird. 
--------------------------------- */

/*let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}*/

/* ---------------------------------
4 
a) Die Konsole gibt aus: "Hallo", "Bla", "Hallo", "Blubb", "Test".
Ich hatte recht.
b) Globale Variable: Überall darauf zugreifbar und veränderbar
Lokale Variable: Variablen, die in einer Methode deklariert wurde und Variablen, die mit einer Methode als Parameter übergeben werden.
Übergabeparametern: Gibt an, was eine Funktion nach einem Durchlauf weitergibt z.B. void: Die Funktion übergibt keinen Parameter.
"Normale Variablen" können  nur mit einem bestimmten Datentypen deklariert werden z.B. String mit Buchstaben.
Eine Funktion kann aus mehreren unterschiedlichen Variablen und Datentypen bestehen.
Sie ähneln sich insofern, dass beide mit einem Varbiablennamen benannt werden können und durch diesen aufgerufen werden können.

--------------------------------- */
/* ---------------------------------
5 a)
--------------------------------- */
/*let z: number = multipy(5, 9);

function multipy(_x: number, _y: number): number{
    let ergebniss: number = _x * _y;
    return ergebniss;
}

console.log(z);
*/
/* ---------------------------------
5 b)
--------------------------------- */
/* 
let n: number = max(22, 50);
function max(_a: number, _b: number): number {
    if (_a > _b) {
        return _a;
    } else {
        return _b;
    }
}
console.log(n);*/


/* ---------------------------------
5 c)
--------------------------------- */
/*function f (): void{

    let x: number = 1;

    console.log(x);

    while (x < 100) {

        x = x + 1; 

        console.log(x);
    }
}

f();*/

/* ---------------------------------
5 d)
--------------------------------- */
/*
for (let i: number = 0; i < 10; i++) {
    let min: number = 1;
    let max: number = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let r: number = Math.floor(Math.random() * (max - min)) + min;
    console.log(r);
}
*/
/* ---------------------------------
5 e)
--------------------------------- */
console.log(factorial(5));
function factorial(n: number): number{
    let fuc: number = 1;
    for (let i: number = 1; i <= n; i++) {
        fuc = fuc * i;
    }
    return fuc;
}
