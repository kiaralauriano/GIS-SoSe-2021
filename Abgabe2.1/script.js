"use strict";
function a1() {
    let x = "Alles";
    console.log(x);
    func1();
    console.log(x);
    func2();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Gute!");
}
function func2() {
    console.log("Klar?");
}
/* ---------------------------------
1
a) Aus der Konsole wird "Alles", "Klar?" und "Logo!" ausgegeben.
"x" ist der Variblennamen, deshalb kann man "x" immer umbenennen.
Man muss beachten dass man den gleichen Variablennamen in let und log hat.
b) Zuerst wird Zeile 3 ausgeführt, heißt "Alles" wird ausgegeben.
Dann wird Zeile 4 ausgeführt, dadurch kommen wir in Zeile 11 und "Klar?" wird ausgegeben.
Und dann Zeile 5 und es wird "Logo!" ausgegeben.
--------------------------------- */
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/* ---------------------------------
2
a) Es werden Zahlen 9-1 ausgegeben, rückwärts.
Es verändert sich in der do Funktion was. Wir fügen in i = 9 ein.
Dann wird jeweils die Zahl so lange subtrahiert solange es größer als 0 ist.
Heißt bis 1. Dann wird alles ausgegeben und man kommt aus der Schleife raus.
b)
--------------------------------- */
/* ---------------------------------
3
a) A1: let als Variable "y" setzen und nicht "x" log ändern, findet die Console nicht "x".
Und das Terminal sagt dass "y" deklariert ist, aber nirgendwo gefunden wird.
--------------------------------- */
let x = "Hallo";
console.log(x);
func3(x);
console.log(x);
func4();
func5();
console.log(x);
function func3(y) {
    y = "Bla";
    console.log(y);
}
function func4() {
    let x = "Blubb";
    console.log(x);
}
function func5() {
    x = "Test";
}
/* ---------------------------------
4
a) Die Konsole gibt aus: "Hallo", "Bla", "Hallo", "Blubb", "Test".
Ich hatte recht.
b) Globale Variable: Überall darauf zugreifbar und veränderbar
Lokale Variable: Variablen, die innerhalb in einer Funktion sind und nur innerhalb ihres Blockes bekannt ist.
Übergabeparametern: Gibt an, was eine Funktion nach einem Durchlauf weitergibt z.B. void: Die Funktion übergibt keinen Parameter.
"Normale Variablen" können  nur mit einem bestimmten Datentypen deklariert werden z.B. String mit Buchstaben.
Eine Funktion kann aus mehreren unterschiedlichen Variablen und Datentypen bestehen.
Sie ähneln sich insofern, dass beide mit einem Varbiablennamen benannt werden können und durch diesen aufgerufen werden können.

--------------------------------- */
/* ---------------------------------
5 a)
--------------------------------- */
let z = multiply(5, 9);
function multiply(_x, _y) {
    let ergebniss = _x * _y;
    return ergebniss;
}
console.log(z);
/* ---------------------------------
5 b)
--------------------------------- */
let n = max(22, 50);
function max(_a, _b) {
    if (_a > _b) {
        return _a;
    }
    else {
        return _b;
    }
}
console.log(n);
/* ---------------------------------
5 c)
--------------------------------- */
function f() {
    let x = 1;
    console.log(x);
    while (x < 100) {
        x = x + 1;
        console.log(x);
    }
}
f();
/* ---------------------------------
5 d)
--------------------------------- */
for (let i = 0; i < 10; i++) {
    let min = 1;
    let max = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let r = Math.floor(Math.random() * (max - min)) + min;
    console.log(r);
}
/* ---------------------------------
5 e)
--------------------------------- */
console.log(factrorial(7));
function factrorial(n) {
    let fuc = 1;
    for (let i = 1; i <= n; i++) {
        fuc = fuc * i;
    }
    return fuc;
}
/* ---------------------------------
5 f)
--------------------------------- */
leapyears();
function leapyears() {
    let date = new Date();
    let current = date.getFullYear();
    for (let i = 1900; i <= current; i++) {
        if ((i % 4) == 0 && (i % 100) != 0) {
            console.log(i);
        }
        else if ((i % 400) == 0) {
            console.log(i);
        }
    }
}
/* ---------------------------------
6 a)
--------------------------------- */
for (let zeile = 1; zeile <= 7; zeile++) {
    let hashtagZeile = "";
    while (hashtagZeile.length < zeile) {
        hashtagZeile = hashtagZeile + "#";
    }
    console.log(hashtagZeile);
}
/* ---------------------------------
6 b)
--------------------------------- */
for (let i = 1; i <= 100; i++) {
    if ((i % 3) == 0) {
        console.log("Fizz");
    }
    if ((i % 5) == 0 && !((i % 3) == 0)) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
/* ---------------------------------
6 c)
--------------------------------- */
for (let index = 1; index <= 100; index++) {
    let output = index.toString();
    if ((index % 3) == 0 && (index % 5) == 0) {
        output = "FizzBuzz";
    }
    else if ((index % 3) == 0) {
        output = "Fizz";
    }
    else if ((index % 5) == 0) {
        output = "Buzz";
    }
    console.log(output);
}
/* ---------------------------------
6 d)
--------------------------------- */
let size = 8;
let output = "";
for (let zeile = 0; zeile < size; zeile++) {
    for (let spalte = 0; spalte < size; spalte++) {
        if ((zeile + spalte) % 2) {
            output = output + " ";
        }
        else {
            output = output + "#";
        }
    }
    output += "\n";
}
/* ---------------------------------
6 e)
--------------------------------- */
output = "";
schachbrettmod(8, 8);
function schachbrettmod(sizeZ, sizeS) {
    for (let zeile = 0; zeile < sizeZ; zeile++) {
        for (let spalte = 0; spalte < sizeS; spalte++) {
            if ((zeile + spalte) % 2) {
                output = output + " ";
            }
            else {
                output = output + "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}
//# sourceMappingURL=script.js.map