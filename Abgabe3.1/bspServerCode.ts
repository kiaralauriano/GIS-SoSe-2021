import * as Http from "http";

export namespace Aufgabe_3_1Server {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port)
        port = 8100; // wenn kein Port, zuweisung Port = 8100

    let server: Http.Server = Http.createServer(); //Erstellt neuer HTTPServer
    server.addListener("request", handleRequest); // Added Listener
    server.addListener("listening", handleListen); 
    server.listen(port); //schaut auf definierten Port

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Antwort URL
        _response.end(); //Antwort beenden
    }
}