"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_3_4Server;
(function (Aufgabe_3_4Server) {
    let collectionUser;
    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port)
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert
    let databaseURL = function startServer(_port) {
        let server = Http.createServer(); //Erstellt neuen Server
        server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
        server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
        server.listen(port); //Server hört auf den definierten Port
    };
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Terminalausgabe: "I hear voices"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung = Wer hat Zugriff?
        let url = Url.parse(_request.url, true);
        let query = url.query;
        if (url.pathname == "/html") { //bin ich auf html?
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) { //gehe alle keys durch
                let value = query[key]; //nehme für jeden key den value
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>"); //schreibe die Verbindung aus Key und Value
            }
        }
        if (url.pathname == "/json") { //oder auf json?
            _response.setHeader("content-type", "application/json");
            _response.write(JSON.stringify(query));
        }
        _response.end();
    }
})(Aufgabe_3_4Server = exports.Aufgabe_3_4Server || (exports.Aufgabe_3_4Server = {}));
//# sourceMappingURL=bspServerCode.js.map