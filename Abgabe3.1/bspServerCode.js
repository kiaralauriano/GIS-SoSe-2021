"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_1Server = void 0;
const Http = require("http");
var Aufgabe_3_1Server;
(function (Aufgabe_3_1Server) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port)
        port = 8100; // wenn kein Port, zuweisung Port = 8100
    let server = Http.createServer(); //Erstellt neuer HTTPServer
    server.addListener("request", handleRequest); // Added Listener
    server.addListener("listening", handleListen);
    server.listen(port); //schaut auf definierten Port
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Antwort URL
        _response.end(); //Antwort
    }
})(Aufgabe_3_1Server = exports.Aufgabe_3_1Server || (exports.Aufgabe_3_1Server = {}));
//# sourceMappingURL=bspServerCode.js.map