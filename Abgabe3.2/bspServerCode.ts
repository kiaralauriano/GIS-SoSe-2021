import * as Http from "http";
import { type } from "os";
import * as Url from "url";

export namespace Aufgabe_3_2Server {
    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port: number = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port) 
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert

    let server: Http.Server = Http.createServer(); //Erstellt neuen Server
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
    server.listen(port); //Server hört auf den definierten Port

    function handleListen(): void { 
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }

    interface Query {
        [type: string]: string | string[];
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Terminalausgabe: "I hear voices"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung = Wer hat Zugriff?
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let query: Query = url.query;

        if (url.pathname == "/html") {
            for (let key in query) {
                let value: string | string [] = query[key];
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>");
            }
        }
        
        if (url.pathname == "/json") {
            _response.write(JSON.stringify(query));
        }
        _response.end(); //Response wird beendet
    }
}