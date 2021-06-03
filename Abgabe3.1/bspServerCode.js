"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_1Server = void 0;
const Http = require("http");
var Aufgabe_3_1Server;
(function (Aufgabe_3_1Server) {
    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port)
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert
    let server = Http.createServer(); //Erstellt neuen Server
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
    server.listen(port); //Server hört auf den definierten Port
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Terminalausgabe: "I hear voices"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung = Wer hat Zugriff?
        _response.write(_request.url); // Die URL vom Request wird in die Response geschrieben
        console.log(_request.url); //URL vom Request wird ausgegeben
        _response.end(); //Response wird beendet
    }
})(Aufgabe_3_1Server = exports.Aufgabe_3_1Server || (exports.Aufgabe_3_1Server = {}));
//# sourceMappingURL=bspServerCode.js.map