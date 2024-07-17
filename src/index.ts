import app from "./app";
import routesApplication from "./http/routes";
import socketsInit from "./http/sockets";
import database from "./database";
app.initInstance();
app.initServer();
database.initInstance();
routesApplication(app.initInstance());
socketsInit();
