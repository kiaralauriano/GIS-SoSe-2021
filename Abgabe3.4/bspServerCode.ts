import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe_3_4Server {

    let collectionUser: Mongo.Collection;

    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port: number = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port) 
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert

    let databaseURL: string = "mongodb://localhost:27017";
    //mongodb+srv://kiki:<password>@wievieleprogrammenoch.q8j9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //Erstellt neuen Server
        server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
        server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
        server.listen(port); //Server hört auf den definierten Port
    }

    async function connectToDatabase(_port: number | string): Promise<void> {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    function handleListen(): void { 
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }

    interface Query {
        [type: string]: string | string[];
    }

    interface DBUser {
        fname: string;
        nname: string;
        email: string;
        password: string;
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let query: Query = url.query;
            let command: string = <string>query.command;
            if (command == "insert") {
                let fname: string = <string>query.fname;    //mit <string> sind wir sicher, dass es ein String ist und kein String array
                let nname: string = <string>query.nname;
                let email: string = <string>query.email;
                let password: string = <string>query.password;
                if (fname && nname && email && password) {
                    let dbUser: DBUser = { fname: fname, nname: nname, email: email, password: password };
                    await storeData(dbUser);
                    let jsonString: string = JSON.stringify(url.query);
                    _response.write(jsonString);
                    _response.write(" User saved successfully");
                } else {
                    console.log("Not hand over everything");
                }
            } else if (command == "get") {
                let dbUsers: DBUser[] = await getAllDBUsers();
                _response.write(JSON.stringify(dbUsers));
            } else {
                console.log("Wrong command");
            }

        }
        _response.end();
    }

    async function storeData(_dbUser: DBUser): Promise <void> {
        await collectionUser.insertOne(_dbUser);
    }

    async function getAllDBUsers(): Promise<DBUser[]> {
        let dbUser: DBUser[];
        dbUser = await collectionUser.find().toArray();
        return dbUser;
    }
        

}